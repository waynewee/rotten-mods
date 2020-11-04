const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendByLikes = require('../recommend/recommend-by-likes')
const User = require('../../dist/src/models/user').default
const Recommendation = require('../../dist/src/models/recommendation').default
mongoose.connect(mongoUri)



async function computeRecsByLikes(){

  console.log("computing recommendations by likes")
  
  //get all users that have not had recommendations computed for
  const users = await User.find({ computedRecsFlag: false })

  console.log(`Got ${users.length} users`)
  
  for( let i = 0; i < users.length; i++ ){

    const userId = users[i]._id.toString()
    const modIds = await recommendByLikes(userId)
    const type = "similarity"

    const recommendation = new Recommendation({
      userId,
      modIds, 
      type
    })

    await recommendation.save()

    await User.updateOne({ _id: userId}, { $set: { computedRecsFlag: true }})
    
  }

}

module.exports = computeRecsByLikes