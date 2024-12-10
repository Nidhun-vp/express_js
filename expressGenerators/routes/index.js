var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,app:"My app"});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { home: 'this is home page text' ,heading:"this is heading"});
});

router.get('/about', function(req, res, next) {
  res.render('about', { about: 'this is about section' ,phno:"this is phno"});
});


module.exports = router;
