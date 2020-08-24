"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes = require("./routes");
var config = require("./config");
var MONGO_DB_URL = config.MONGO_DB_URL;
var port = process.env.PORT || 80;
var app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
mongoose.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use('/api', routes);
app.listen(port);
