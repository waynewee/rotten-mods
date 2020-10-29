const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Review = require('../../../dist/src/models/review').default
const User = mongoose.model("User")
const Mod = mongoose.model("Mod")

function populateReviews(){

  return Review.remove({})
  .then(() => {

    const promises = []

    console.log("Populating reviews")
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
  
            const newReview = new Review({
              text: "This is a fake review",
              userId: user._id,
              modId: mod._id,
              acadYearTaken: 4,
              semesterTaken: 1
            })
  
            return newReview.save()
  
          })
        })
  
      )
  
    }

    return Promise.all(promises)
  })

}

module.exports = {
  populateReviews
}



