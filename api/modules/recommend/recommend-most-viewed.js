const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')

mongoose.connect(mongoUri)

const Event = require('../../dist/src/models/Event').default
const Mod = require('../../dist/src/models/mod').default

function recommend() {
  return Event.aggregate([
    { $match: {sub : "mod"}},
    { $match: {type : "view"}},
    { $group: {_id : "$subId", views: {$sum: 1}}},
    { $sort: {views : -1}},
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
To generate all time 10* most viewed modules as recommendations:
- call recommend()
- returns array of mods sorted in descending order of view count
*/
module.exports = recommend
