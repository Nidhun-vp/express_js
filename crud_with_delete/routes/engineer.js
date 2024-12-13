var express=require('express');
var router=express.Router();
engineerModel=require('../models/engineer.model');

router.get('/',function(req,res,next){
    res.send('connection successful');
});

//insert using already defined values
router.get('/insert',function(req,res,next){
    let newMember=new engineerModel({
        name:"ChandraGuptha",
        branch:"IC",
        college:"TKM,kollam",
        passout:2024  
    });
    newMember.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err);
    });

});

//for insert using post man body>raw section
router.post('/add',function(req,res,next){
    let newMember=new engineerModel({
        //left side field as same as in schema in engineer.model.js
        name:req.body.name,
        branch:req.body.branch,
        college:req.body.college,
        passout:req.body.passout
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
        const myformShow=await engineerModel.find();
        res.send({status:200,length:myformShow.length,myformShow});
    }catch(err){
        res.status(500).send({error:err.message});
    }
})

//search
//
router.get('/listbyname',async function(req,res,next){
    try{
        //take values of first name
        const NewName=req.query.name;
        const myformSearch=await engineerModel.find({name:NewName});
        res.send({status:200,length:myformSearch.length,myformSearch});
    }catch(err){
        res.status(500).send({error:err.message});
    }
})

//delete
router.get('/deleteUser',async function(req,res,next){
    try{
        //take values of first name
        const id=req.query.id;
        const response=await engineerModel.findByIdAndDelete(id);//findOneandRemove can also use
        res.status(200).send({
            status:200,
            message:"Delete successful",
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
        const response=await engineerModel.findOneAndDelete({name:"luis"});//findOneandRemove can also use, pass name as a object
        res.status(200).send({
            status:200,
            message:"Delete successful using name",
        });
    }catch(err){
        res.status(500).send({status:500,error:err.message});
    }
});

//deleteMany
router.get('/deletemany',async function(req,res,next){
    try{
        //take values of first name
        const name=req.query.name;
        const response=await engineerModel.deleteMany({name:"max"});//findOneandRemove can also use, pass name as a object
        res.status(200).send({
            status:200,
            message:"Delete successful using deleteMany",
        });
    }catch(err){
        res.status(500).send({status:500,error:err.message});
    }
});



module.exports=router;