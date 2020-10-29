const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Event = require('../../../dist/src/models/Event').default
const Mod = require('../../../dist/src/models/mod').default
const Recommendation = require('../../../dist/src/models/Recommendation').default
const { recommendationTypesEnum } = require('../../../dist/src/models/Recommendation')
var _ = require('lodash');
var ObjectId = require('mongodb').ObjectId;

/*
to generate recommendation
- sum(jaccard of user and all users who liked mod) / total likes for mod

- recommend
- for each mod
-- call recommendation index (user, module)
*/

//calculate jaccard index
// map to generate jaccard?
function jaccardIndex(user, users) {
    return new Promise(function(resolve, reject) {
        Event.aggregate([ 
            { $match: {sub : "mod"}},
            { $group: {_id : "$userId", subId: {$push: "$subId"}}},
            { $match: {_id : user}}
        ]).then(function(res) {
            //console.log("res is: ", res[0].modId);
            Event.aggregate([
                { $match: {sub : "mod"}},
                { $match: {userId : {"$in": users}}},
                { $group: { _id : "$userId", mods: {$push: "$subId"}}},
                { $project: {
                    "intersect": {"$size": { "$setIntersection": [res[0].subId, "$mods"]}}, 
                    "union": {"$size": { "$setUnion": [res[0].subId, "$mods"] }},
                    "jaccard": 
                        { "$divide": [{"$size": { "$setIntersection": [res[0].subId, "$mods"]}},
                              {"$size": { "$setUnion": [res[0].subId, "$mods"]}}]},
                }},
                { $group: { _id : 0, total: {$sum: "$jaccard"}}},
            ]).then(function (res2) {
                console.log(res2);
                resolve(res2[0].total);
            });
        });
    });
}

//count total number of likes for mod
function totalLikes(module) {
    return new Promise(function(resolve, reject) {
        Event.aggregate([
            {$match: {type: "like"}},
            {$match: {subId: module}},
            {$count: "totalLikes"}
        ]).then(function (res) {
            resolve(res[0].totalLikes)});
    });
}

//filter users who liked a mod
function likedUsers(module) {
    return new Promise(function(resolve, reject) {
        Event.aggregate([
            { $match: { type : "like"}},
            { $match: { subId : module}},
            { $group: { _id: '$userId'}}
        ]).then(function (res) {
            res = res.map(function(r) {
                return r._id;
            });
            resolve(Object.values(res));
        });
    });
    
}

//calculate recommendation index
function recommendationIndex(user, module) {
    return new Promise((resolve, reject) => {
        var users = likedUsers(module);
        users.then(function(u) {
            var index = jaccardIndex(user, u);
            index.then(function(ind) {
                var total = totalLikes(module);
                total.then(function(likes) {
                    console.log("total likes is: ", likes);
                    console.log("rec index is: ", ind / likes);
                    resolve(ind / likes);
                });
            });
        });
        
    })
}

function recommend(user) {
    return new Promise((resolve, reject) => {
        Mod.find({}, (err, modules) => {
            if(err) {
                console.log(err);
            } 
            var recommendations;
            modules.map(module => {
                var index = recommendationIndex(user, module._id);
                index.then(function(idx) {
                    recommendations.module = idx;
                })
            });
            
            const newRecommendation = new Recommendation({
                userId: user._id,
                recommendations: recommendations, //store key value pair of mod code to rec idx
                type: recommendationTypesEnum.likes
            });
            resolve(newRecommendation.save());
        });
    });
}

likedUsers(ObjectId("5f9b1c53c497871dbf23e702"));
totalLikes(ObjectId("5f9b1c53c497871dbf23e702"));
recommendationIndex(ObjectId("5f9b1c53c497871dbf23e65e"), ObjectId("5f9b1c53c497871dbf23e702"));
recommend(ObjectId("5f9b1c53c497871dbf23e65e"));
