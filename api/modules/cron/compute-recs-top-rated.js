const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendTopRated = require('../recommend/recommend-top-rated')
const Recommendation = require('../../dist/src/models/recommendation').default
const Mod = require('../../dist/src/models/mod').default
mongoose.connect(mongoUri)

async function computeRecsTopRated(){

  console.log("computing recommendations by top rated")
  
  let modIds  = await recommendTopRated()

  if( modIds.length == 0 ){
    const mods = await Mod.aggregate([
      { $match: {}},
      { $sample: { size: 6 }}
    ])

    modIds = mods.map( mod => mod._id.toString() )
  }

  const recommendation = new Recommendation({
    modIds,
    type: "top-rated"
  })

  await recommendation.save()

  console.log("done")
}

// computeRecsTopRated()

module.exports = computeRecsTopRated