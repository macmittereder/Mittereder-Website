var express = require('express');
var geoip = require('geoip-lite');
var MobileDetect = require('mobile-detect');
var fs = require('fs');

var router = express.Router();

router.get('/', function (req, res) {
  var md = new MobileDetect(req.headers['user-agent']);
  var geo = geoip.lookup(req.ip);

  if (geo) {
    if (!req.headers["user-agent"].match(/uptime/) && geo.country == 'US') {
      var browser = req.headers["user-agent"];
      var city = (geo ? geo.city : "Unknown");
      var mobile = (md.mobile() ? 1 : 0);
  
      fs.appendFile('./public/visits.txt', '\nBrowser: ' + browser + ' City: ' + city + ' Mobile: ' + mobile, function (err) {
        if (err) throw err;
      });
    }
  }

  res.render('index', {title: "Mittereder Studios"});
});

router.get('/2', function (req, res) { 
  res.render('index2', {title: "Mittereder Studios"});
});

module.exports = router;
