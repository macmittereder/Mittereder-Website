var express = require('express');
//var sassMiddleware = require('../middleware/sass');
// compile sass in middleware for each page

var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {title: "Mittereder Studios"});
});

router.get('/2', function (req, res) { 
  res.render('index2', {title: "Mittereder Studios"});
});

module.exports = router;
