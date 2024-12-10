var express=require('express');
var router=express.Router();
var StudentModel=require('../models/student.model')


 router.get('/',function(req,res,next){
    res.send('connected successfully');
 });

 router.get('/add',function(req,res,next){
      let newStudent=new StudentModel({
        student_id:'1002',
        first_name:'tony',
        last_name:'p',
        age:28,
        dob:'2003-4-12',
        department:"aeronautical"
      });
      newStudent.save().then((result)=>{
        res.send(result)
      }).catch((err)=>{
        res.send(err)
      })
 });
    
 module.exports = router;