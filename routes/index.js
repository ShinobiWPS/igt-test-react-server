var express = require('express');
var router = express.Router();
const sectionsData = require('../data/sections.json');


const DELAY = 500

router.get('/', function(req, res, next) {
  setTimeout(() => {
    res.send(sectionsData)
  }, DELAY)
});

module.exports = router;
