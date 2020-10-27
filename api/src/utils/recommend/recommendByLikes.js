const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Event = require('../../../dist/src/models/Event').default
const User = require('../../../dist/src/models/User').default
const Mod = require('../../../dist/src/models/Mod').default
const Recommendation = require('../../../dist/src/models/Recommendation').default
const { recommendationTypesEnum } = require('../../../dist/src/models/Recommendation')
var _ = require('lodash');
var ObjectId = require('mongodb').ObjectId;

/*
to generate recommendation
- sum(jaccard of user and all users who liked mod) / total likes for mod

- recommend
-- call recommendation index (user, module)
-- call total likes (module)
-- call liked users (module)
-- call jaccard index (user)
*/

//calculate jaccard index
// map to generate jaccard?
function jaccardIndex(user, users) {
    return new Promise(function(resolve, reject) {
        Event.aggregate([ 
            { $group: { _id : "$userId", modId: {$push: "$modId"}}},
            { $match: {_id : user}}
        ]).then(function(res) {
            //console.log("res is: ", res[0].modId);
            Event.aggregate([
                { $group: { _id : "$userId", mods: {$push: "$modId"}}},
                { $project: {
                    "intersect": {"$size": { "$setIntersection": [res[0].modId, "$mods"]}}, 
                    "union": {"$size": { "$setUnion": [res[0].modId, "$mods"] }},
                    "jaccard": 
                        { "$divide": [{"$size": { "$setIntersection": [res[0].modId, "$mods"]}},
                              {"$size": { "$setUnion": [res[0].modId, "$mods"]}}]},
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
            {$match: {type: "likedMod"}},
            {$match: {modId: module}},
            {$count: "totalLikes"}
        ]).then(function (res) {resolve(res[0].totalLikes)});
    });
}

//filter users who liked a mod
function likedUsers(module) {
    return new Promise(function(resolve, reject) {
        Event.aggregate([
            { $match: { type : "likedMod"}},
            { $match: { modId : module}},
            { $group: { _id: '$userId'}}
        ]).then(function (res) {resolve(res)});
    });
    
}

//calculate recommendation index
function recommendationIndex(user, module) {
    console.log("user is: ", user);
    return new Promise((resolve, reject) => {
        var users = likedUsers(module);
        users.then(function(u) {
            console.log("liked users: ", u);
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
        Mod.aggregate([
            { $project: {
                "count": {"$sum" : "$_id"},
                "index": recIdx(user, "$_id")}
                }
        ]).then(function (res) {console.log(res); resolve(res)});
    });
}

/*
//save recommendation on Recommendation
function recommend(user) {
    Mod.find().then(modules => {
        var promises = [];
        recommendations = [];
        for (var i = 0; i < modules.length; i++) {
            promises.push(recommendationIndex(user, modules[i]));
        }
        Promise.all(promises).then(function(res) {
            for (var i = 0; i < modules.length; i++) {
                var mod = {
                    modId: modules[i].modId,
                    recIndex: res[i]
                };
                recommendations.push(mod);
            }
            const newRecommendation = new Recommendation({
                userId: user._id,
                recommendations: recommendations, //store string array of mods
                type: recommendationTypesEnum.likes
            });
            newRecommendation.save();
            resolve(recommendations);
        });
    });
}*/

console.log("generate");
console.log(recommendationIndex(ObjectId("5f854114eee454084b1f9eab"), ObjectId("5f854114eee454084b1f9fb0")));
//console.log(recommend(ObjectId("5f854114eee454084b1f9eab")));
