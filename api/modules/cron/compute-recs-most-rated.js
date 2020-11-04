const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendMostRated = require('../recommend/recommend-most-rated')
const Recommendation = require('../../dist/src/models/recommendation').default
mongoose.connect(mongoUri)

async function computeRecsMostRated(){

  console.log("computing recommendations by most rated")
  
  const modIds = await recommendMostRated()

  const recommendation = new Recommendation({
    modIds,
    type: "most-rated"
  })

  await recommendation.save()

  console.log("done")

}

// computeRecsMostRated()

module.exports = computeRecsMostRated