const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendMostViewed = require('../recommend/recommend-most-viewed')
const Recommendation = require('../../dist/src/models/recommendation').default
mongoose.connect(mongoUri)

async function computeRecsMostViewed(){

  console.log("computing recommendations by most viewed")
  
  const modIds = await recommendMostViewed()

  const recommendation = new Recommendation({
    modIds,
    type: "most-viewed"
  })

  await recommendation.save()

  console.log("done")

}

// computeRecsMostViewed()

module.exports = computeRecsMostViewed