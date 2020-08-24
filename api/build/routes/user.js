"use strict";
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.json({
        message: 'Got User!',
    });
});
module.exports = router;
