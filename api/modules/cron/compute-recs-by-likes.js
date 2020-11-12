const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendByLikes = require('../recommend/recommend-by-likes')
const User = require('../../dist/src/models/user').default
const Recommendation = require('../../dist/src/models/recommendation').default
const Mod = require('../../dist/src/models/mod').default
mongoose.connect(mongoUri)



async function computeRecsByLikes(){

  console.log("computing recommendations by likes")
  
  //get all users that have not had recommendations computed for
  const users = await User.find({})

  console.log(`Got ${users.length} users`)
  
  for( let i = 0; i < users.length; i++ ){

    const userId = users[i]._id.toString()
    let modIds = await recommendByLikes(userId)
    const type = "similarity"

    if( modIds.length == 0 ){
      const mods = await Mod.aggregate([
        { $match: {}},
        { $sample: { size: 6 }}
      ])
  
      modIds = mods.map( mod => mod._id.toString() )
    }

    const recommendation = new Recommendation({
      userId,
      modIds, 
      type
    })

    await recommendation.save()
    
  }

}

module.exports = computeRecsByLikes