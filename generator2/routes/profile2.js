var express = require('express');
var router = express.Router();

/* GET details page. */
router.get('/', function(req, res, next) {
  const data= {name:"ansar" ,village: 'kottakkal' ,district:"Malappuram"}
  res.render('profile2',data);
});
module.exports=router;