var express = require('express');
var router = express.Router();

/* GET details page. */
router.get('/', function(req, res, next) {
  const data= { village: 'kakkanchery' ,district:"Malappuram"}
  res.render('details',data);
});
module.exports=router;