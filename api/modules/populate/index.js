const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')
const { populateCourse } = require('./populateCourses')
const { populateLikes, populateViews } = require('./populateEvents')
const { populateMods } = require('./populateMods')
const { populateSchools } = require('./populateSchools')
const { populateUsers } = require('./populateUsers')
const { populateDifficulty, populateStar} = require('./populateRatings')
const {populateReviews} = require('./populateReviews')

mongoose.connect(mongoUri)

populateUsers()
.then(populateMods)
.then(populateSchools)
.then(populateCourse)
.then(populateReviews)
.then(populateLikes)
.then(populateViews)
.then(populateDifficulty)
.then(populateStar)
.then(() => console.log("Successfully populated database"))
.catch( err => console.log(err))


