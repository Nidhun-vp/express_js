var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const data={ id:'Id2024',name:"nidhun",village:"clt",district :"calicut"}
  res.render('profile',data);// name of jade
});
module.exports=router;


