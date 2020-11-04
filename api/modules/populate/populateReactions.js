const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')

mongoose.connect(mongoUri)

const Reaction = require('../../dist/src/models/Reaction').default
const Mod = require('../../dist/src/models/mod').default
const User = require('../../dist/src/models/user').default

function populateReactions(reactionType){

  return Reaction.remove({})
  .then(() => {
    console.log("Populating reactions")
    const promises = []
  
    // create views
    for( let i = 0; i < 500; i++ ){
      
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
  
            const newReaction = new Reaction({
              type: reactionType,
              userId: user._id,
              subId: mod._id,
              sub: "mod"
            })
  
            return newReaction.save()
  
          })
        })
  
      )
  
    }

    return Promise.all(promises)

  })
}

function populateLikes(){ return populateReactions( "like" )}
function populateDislikes(){ return populateReactions("dislike")}

populateLikes()

module.exports = {
  populateDislikes,
  populateLikes
}