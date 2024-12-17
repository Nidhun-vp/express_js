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
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        phone:req.body.phone
    });
    newMember.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err);
    });

});

//list values in mongodb
router.get('/list',async function(req,res,next){
    try{
        const myformShow=await StudentModel.find();
        res.send({status:200,length:myformShow.length,myformShow});
    }catch(err){
        res.status(500).send({error:err.message});
    }
})

router.get('/updatebyid',async function(req,res,next){
    try{
        const idof_field='6761142c2087141c69c8053f';
        const fname="john";
        //update document by id
        const result=await StudentModel.findByIdAndUpdate(
            idof_field,{name:fname},
            
        );
         res.status(200).send({
            status:200,
            message:"update successful using id",
         });
        }catch(err){
            res.status(500).send({status:500,error:err.message});
            }
        });

//deleteusing name
router.get('/deletename',async function(req,res,next){
    try{
        //take values of first name
        const name=req.query.name;
        const response=await StudentModel.findOneAndDelete({name:"sree"});//findOneandRemove can also use, pass name as a object
        res.status(200).send({
            status:200,
            message:"Delete successful using name",
        });
    }catch(err){
        res.status(500).send({status:500,error:err.message});
    }
});




module.exports = router;
