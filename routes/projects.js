var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
   res.render('projects', {title: "Mittereder Studios - Projects"});
});

router.get('/fastmoviephotos', function (req, res, next) {
  res.render('fastmoviephotos', {title: "Mittereder Studios - Fast Movie Photos"});
});

router.get('/lifecounter', function (req, res, next) {
  res.render('lifecounter', {title: "Mittereder Studios - Life Counter"});
});

router.get('/franklinregional', function (req, res, next) {
  res.render('franklinregional', {title: "Mittereder Studios - Franklin Regional"});
});

router.get('/pinballprice', function (req, res, next) {
  res.render('pinballprice', {title: "Mittereder Studios - Pinballprice"});
});

router.get('/wordsandmusic', function (req, res, next) {
  res.render('wordsandmusic', {title: "Mittereder Studios - Words and Music"});
});

router.get('/vehicleapp', function (req, res, next) {
  res.render('vehicleapp', {title: "Mittereder Studios - Vehicle App"});
});

router.get('/frameit', function (req, res, next) {
  res.render('frameit', {title: "Mittereder Studios - FrameIt"});
});

router.get('/graphgame', function (req, res, next) {
  res.render('graphgame', {title: "Mittereder Studios - Graph Game"});
});

router.get('/rockpaperscissors', function (req, res, next) {
  res.render('rockpaperscissors', {title: "Mittereder Studios - Rock Paper Scissors"});
});

router.get('/gradez', function(req, res, next) {
  res.render('gradez', {title: "Mittereder Studios - Gradez"});
});

module.exports = router;
