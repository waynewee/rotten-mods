const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendMostViewed = require('../recommend/recommend-most-viewed')
const Recommendation = require('../../dist/src/models/recommendation').default
const Mod = require('../../dist/src/models/mod').default
mongoose.connect(mongoUri)

async function computeRecsMostViewed(){

  console.log("computing recommendations by most viewed")

  let modIds = await recommendMostViewed()

  if( modIds.length == 0 ){
    const mods = await Mod.aggregate([
      { $match: {}},
      { $sample: { size: 6 }}
    ])

    modIds = mods.map( mod => mod._id.toString() )
  }


  const recommendation = new Recommendation({
    modIds,
    type: "most-viewed"
  })

  await recommendation.save()

  console.log("done")

}

// computeRecsMostViewed()

module.exports = computeRecsMostViewed