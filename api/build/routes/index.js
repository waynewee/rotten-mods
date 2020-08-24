"use strict";
var express = require('express');
var user = require('./user');
var router = express.Router();
router.use('/user', user);
module.exports = router;
