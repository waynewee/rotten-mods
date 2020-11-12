const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendMostRated = require('../recommend/recommend-most-rated')
const Recommendation = require('../../dist/src/models/recommendation').default
const Mod = require('../../dist/src/models/mod').default
mongoose.connect(mongoUri)

async function computeRecsMostRated(){

  console.log("computing recommendations by most rated")
  
  let modIds = await recommendMostRated()

  if( modIds.length == 0 ){
    const mods = await Mod.aggregate([
      { $match: {}},
      { $sample: { size: 6 }}
    ])

    modIds = mods.map( mod => mod._id.toString() )
  }

  const recommendation = new Recommendation({
    modIds,
    type: "most-rated"
  })

  await recommendation.save()

  console.log("done")

}

// computeRecsMostRated()

module.exports = computeRecsMostRated