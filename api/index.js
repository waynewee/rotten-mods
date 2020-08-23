const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const {
  MONGO_DB_URL,
} = require('./config');

const port = process.env.PORT || 80;

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

mongoose.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', routes);

app.listen(port);
