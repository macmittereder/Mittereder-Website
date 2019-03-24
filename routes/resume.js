var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
   res.render('resume', {title: "Mittereder Studios - Resume"});
});

module.exports = router;
