const mongoose = require('mongoose')
const randomString = require('randomstring')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const User = require('../../../dist/src/models/User').default

function populateUsers(){

  const promises = []
  
  for( let i = 0; i < 100; i++ ){
  
    const email = randomString.generate(Math.floor(Math.random() * 15) + 5) + "@email.com"
  
    const newUser = new User({
      email
    })
  
    promises.push(newUser.save())
  }
  return Promise.all(promises)

}

module.exports = {
  populateUsers
}



