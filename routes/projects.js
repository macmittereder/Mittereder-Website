var express = require('express');
var sassMiddleware = require('../middleware/sass');

var router = express.Router();

router.get('/', sassMiddleware, function (req, res, next) {
   res.render('projects');
});

router.get('/fastmoviephotos', function (req, res, next) {
  res.render('fastmoviephotos');
});

router.get('/lifecounter', function (req, res, next) {
  res.render('lifecounter');
});

router.get('/franklinregional', function (req, res, next) {
  res.render('franklinregional');
});

router.get('/pinballprice', function (req, res, next) {
  res.render('pinballprice');
});

router.get('/wordsandmusic', function (req, res, next) {
  res.render('wordsandmusic');
});

router.get('/vehicleapp', function (req, res, next) {
  res.render('vehicleapp');
});

router.get('/frameit', function (req, res, next) {
  res.render('frameit');
});

router.get('/graphgame', function (req, res, next) {
  res.render('graphgame');
});

router.get('/rockpaperscissors', function (req, res, next) {
  res.render('rockpaperscissors');
});

module.exports = router;
