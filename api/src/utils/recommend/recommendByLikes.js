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

    return Event.aggregate([ 
      { $match: {sub : "mod"}},
      { $group: {_id : "$userId", subId: {$push: "$subId"}}},
      { $match: {_id : user}}
    ])
    .then( res => {
      console.log("res is: ", res);
        return Event.aggregate([
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
        ])
        .then( res2 =>{
          console.log(res2)
          return res2[0].total
        })
    })

    return new Promise(function(resolve, reject) {
        Event.aggregate([ 
            { $match: {sub : "mod"}},
            { $group: {_id : "$userId", subId: {$push: "$subId"}}},
            { $match: {_id : user}}
        ]).then(function(res) {
            console.log("res is: ", res);
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
            {$match: {type: "view"}},
            {$match: {subId: module}},
            {$count: "totalLikes"}
        ]).then(function (res) {
            resolve(res[0].totalLikes)});
    });
}

//filter users who liked a mod
function likedUsers(module) {

    return Event.aggregate([
      { $match: { type : "view"}},
      { $match: { subId : module}},
      { $group: { _id: '$userId'}}
    ])
    .then( res => {
      res = res.map( r => r._id)
      return res
    })

    return new Promise(function(resolve, reject) {
        Event.aggregate([
            { $match: { type : "view"}},
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

    return likedUsers(module)
    .then( u => {
      return jaccardIndex(user, u)
      .then( indx => {
        return indx/u.length
      })
    })

    return new Promise((resolve, reject) => {
        var users = likedUsers(module);
        return users.then(function(u) {
            var index = jaccardIndex(user, u);
            return index.then(function(ind) {
                console.log("total likes is: ", u.length);
                console.log("rec index is: ", ind / u.length);
                resolve(ind / u.length);
            });
        });
        
    })
}

function recommend(user) {

  return Mod.find({})
  .then( modules => {

    const recs = {}

    return Promise.all(
      modules.map( m => {
        return recommendationIndex(user, m._id)
        .then( idx => {
          recs.module.code = idx
        })
      })
    )
  })
  .catch( err => {
    console.log(err)
  })

    return new Promise((resolve, reject) => {
        Mod.find({}, (err, modules) => {
            if(err) {
                console.log(err);
            } 
            var recs = {};
            modules.map(module => {
                var index = recommendationIndex(user, module._id);
                console.log("idx", index);
                index.then(function(idx) {
                    console.log("code, index ", code, idx);
                    recs.module.code = idx;
                    console.log(recs);
                });
            });

            /*
            
            const newRecommendation = new Recommendation({
                userId: user._id,
                recommendations: recs, //store key value pair of mod code to rec idx
                type: recommendationTypesEnum.likes
            });
            resolve(newRecommendation.save());*/
            resolve(recs);
        });
    });
}

//likedUsers(ObjectId("5f9b1c53c497871dbf23e702"));
//totalLikes(ObjectId("5f9b1c53c497871dbf23e702"));
//recommendationIndex(ObjectId("5f9b64e79aa8ac9046e1278b"), ObjectId("5f9b64ec9aa8ac9046e13389"));
recommend(ObjectId("5f98f8e007b1a55d80fa8410"));

