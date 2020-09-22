const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const { eventTypesEnum } = require('../../../dist/src/models/Event')
const Event = require('../../../dist/src/models/Event').default
const User = require('../../../dist/src/models/User').default
const Mod = require('../../../dist/src/models/Mod').default

function populateEvents(eventType){

  const promises = []

  // create views
  for( let i = 0; i < 10000; i++ ){
    
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
            modId: mod._id
          })

          return newEvent.save()

        })
      })

    )

  }
}

function populateViews(){ return populateEvents( eventTypesEnum.viewedMod )}
function populateLikes(){ return populateEvents(eventTypesEnum.likedMod)}

module.exports = {
  populateLikes,
  populateViews
}