const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Rating = require('../../../dist/src/models/Rating').default
const Mod = require('../../../dist/src/models/mod').default
const User = require('../../../dist/src/models/user').default

function populateRatings(ratingType){

  return Rating.remove({})
  .then(() => {
    console.log("Populating ratings")
    const promises = []
  
    // create views
    for( let i = 0; i < 100; i++ ){
      
      promises.push(
        User.aggregate([
          {$sample: {size: 1}}
        ])
        .then( users => {
  
          if( users.length == 0 ){
            console.log("No users found")
            return;
          }
  
          return Mod.aggregate([
            {$sample: {size: 1}}
          ])
          .then( mods => {
  
            if( mods.length == 0 ){
              console.log("No users found")
              return;
            }
  
            const user = users[0]
            const mod = mods[0]
  
            const value = Math.floor(Math.random() * 5) + 0

            const newRating = new Rating({
              type: ratingType,
              userId: user._id,
              value,
              sub: "mod",
              subId: mod._id
            })
  
            return newRating.save()
  
          })
        })
  
      )
  
    }

    return Promise.all(promises)

  })

}

function populateDifficulty(){ return populateRatings( "difficulty" )}
function populateStar(){ return populateRatings("star")}

module.exports = {
  populateStar,
  populateDifficulty
}