const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')

mongoose.connect(mongoUri)
const Reaction = require('../../dist/src/models/Reaction').default
const Mod = require('../../dist/src/models/mod').default
//var _ = require('lodash');

//calculate jaccard index
function jaccardIndex(user, users) {
  // mods liked by user
  return Reaction.aggregate([ 
    { $match: {sub : "mod", type: "like"}},
    { $group: {_id : "$userId", subId: {$push: "$subId"}}},
    { $match: {_id : user}}
  ])
  .then( res => {
      return Reaction.aggregate([
        { $match: {sub : "mod", type: "like", userId : {"$in": users}}},
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
        if(res2.length == 0) {
          return 0
        } else {
          return res2[0].total
        }
      })
  })
}

//filter users who liked a mod
function likedUsers(module) {
  return Reaction.aggregate([
    { $match: { type : "like", subId : module}},
    { $group: { _id: '$userId'}}
  ])
  .then( res => {
    res = res.map( r => r._id)
    return res
  })
}

async function recommend(user) {
  /*
  init results array
  for each mod 
    -> users = likedUsers(mod) 
    -> index = jaccardIndex(user, users)
    -> add {code, index} to results array
  return results
  */
  console.log("generate recommendations")
  results = []
  Mod.find({}).then(modules => {
    modules.map(m => {
      users = likedUsers(m._id.toString()).then(u => {
        //console.log(u)
        index = jaccardIndex(user, u).then(ind => {
          var recIndex
          if(u.length == 0) {
            recIndex = 0
          } else {
            recIndex = ind / u.length
          }
          if(recIndex != 0) {
            var code = m.code
            //console.log(m._id)
            results.push({code, recIndex})
          }
        })
      })
    })
  })

  await new Promise(resolve => setTimeout(resolve, 10000));
  results.sort(function(a, b) {
    return b.recIndex - a.recIndex
  })
  const recommendedMods = results.map(r => r.code)
  console.log(recommendedMods)
  return recommendedMods
}

/*
To generate recommendations for a user:
- call recommend(userId)
- returns array of modIds sorted in descending order of recIndex
Empty array will be returned if user does not share similarity with any user
*/
//e.g.
recommend("5fa277c87e1806c9863e8da0")

