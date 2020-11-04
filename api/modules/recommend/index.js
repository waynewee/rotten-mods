const mongoose = require('mongoose')
const { mongoUri } = require('../../dist/config')
const recommendByLikes = require('./recommendByLikes')
mongoose.connect(mongoUri)

function computeRecsByLikes(){
  recommendByLikes("5f9cc0c2ce0c7528e03b0ced")
}

recommendByLikes()

module.exports = {
  computeRecsByLikes
}