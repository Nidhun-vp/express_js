var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('details1', { details: 'explore the session' });
});

module.exports = router;
