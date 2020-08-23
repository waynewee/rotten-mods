const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const mongoose = require('mongoose')

const {
    MONGO_DB_URL
} = require('./config')

const port = process.env.PORT || 80

const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())

mongoose.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})