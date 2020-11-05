const mongoose = require('mongoose')
const randomString = require('randomstring')

const { mongoUri } = require('../../dist/config')

const { hash } = require('../../dist/src/helpers/hash')

mongoose.connect(mongoUri)

const User = require('../../dist/src/models/user').default

function populateUsers(){

  return User.remove({})
  .then(() => hash("12345"))
  .then(password => {
    console.log("Populating users")
    const promises = []
    
    for( let i = 0; i < 100; i++ ){
  
      const randomNumber = Math.floor(Math.random() * 20) + 5
    
      const email = randomString.generate(randomNumber) + "@email.edu"
      const name = randomString.generate({ length: randomNumber, charset: 'alphabetic'}) + " " + randomString.generate(3)
  
      const newUser = new User({
        name,
        email,
        password
      })
    
      promises.push(newUser.save())
    }
    return Promise.all(promises)
  })


}

module.exports = {
  populateUsers
}



