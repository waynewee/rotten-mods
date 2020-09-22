const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')
const { populateLikes, populateViews } = require('./populateEvents')
const { populateMods } = require('./populateMods')
const { populateUsers } = require('./populateUsers')

mongoose.connect(mongoUri)

populateUsers()
.then(populateMods)
.then(populateLikes)
.then(populateViews)
.then(() => console.log("Successfully populated database"))
.catch( err => console.log(err))


