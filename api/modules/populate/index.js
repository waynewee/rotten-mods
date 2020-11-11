const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')
const { populateMods } = require('./populateMods')

mongoose.connect(mongoUri)

populateMods()

