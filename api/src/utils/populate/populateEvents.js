const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Event = require('../../../dist/src/models/Event').default
const Mod = require('../../../dist/src/models/mod').default
const User = require('../../../dist/src/models/user').default

function populateEvents(eventType){

  return Event.remove({})
  .then(() => {
    console.log("Populating events")
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
  
            const newEvent = new Event({
              type: eventType,
              userId: user._id,
              subId: mod._id,
              sub: "mod"
            })
  
            return newEvent.save()
  
          })
        })
  
      )
  
    }

    return Promise.all(promises)

  })
}

function populateViews(){ return populateEvents( "view" )}
function populateClicks(){ return populateEvents("click")}

module.exports = {
  populateClicks,
  populateViews
}