import express = require('express');
import cors = require('cors');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import routes = require('./routes');
import config = require('./config');

const {
  MONGO_DB_URL
} = config

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
