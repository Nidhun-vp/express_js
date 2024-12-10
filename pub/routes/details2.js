var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('details2', { details2: 'have a good Day' });
});

module.exports = router;
