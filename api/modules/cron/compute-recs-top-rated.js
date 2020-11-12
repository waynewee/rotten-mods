const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendTopRated = require('../recommend/recommend-top-rated')
const Recommendation = require('../../dist/src/models/recommendation').default
mongoose.connect(mongoUri)

async function computeRecsTopRated(){

  console.log("computing recommendations by top rated")
  
  const modIds  = await recommendTopRated()

  const recommendation = new Recommendation({
    modIds,
    type: "top-rated"
  })

  await recommendation.save()

  console.log("done")
}

// computeRecsTopRated()

module.exports = computeRecsTopRated