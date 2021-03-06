const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')

mongoose.connect(mongoUri)

const Rating = require('../../dist/src/models/rating').default
const Mod = require('../../dist/src/models/mod').default

function recommend() {
  return Rating.aggregate([
    { $match: {sub : "mod"}},
    { $match: {type : "star"}},
    { $group: {_id : "$subId", avgRating: {$avg: "$value"}}},
    { $sort: {avgRating : -1}},
    {$limit: 10}
  ]).then(res => {
    res = res.map(r => r._id)
    //console.log(res)
    return Mod.aggregate([
      { $project: {_id: {$toString: "$_id"}, code: 1}},
      { $match: {_id : {"$in": res}}},
    ]).then(res2 => {
      res2 = res2.map(r => r._id)
      console.log(res2)
      return res2
    })
  })
}

/*
To generate all time 10* highest rated modules as recommendations:
- call recommend()
- returns array of mods sorted in descending order of rating
*/
module.exports = recommend

