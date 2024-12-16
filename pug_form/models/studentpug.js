var express = require('express');
var router = express.Router();
var StudentModel=require('../models/student.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student');
  
});

router.post('/',function(req,res,next){
    let newMember=new StudentModel({
        //left side field as same as in schema in myform.model.js
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        qualification:req.body.district,
        state:req.body.state
    });
    newMember.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err);
    });

});


module.exports = router;
