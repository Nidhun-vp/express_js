var express=require('express');
var router=express.Router();
myformModel=require('../models/myform.model')
router.get('/',function(req,res,next){
    res.send('connection successful....');
});
//insert using already defined values
router.get('/insert',function(req,res,next){
    let newMember=new myformModel({
        id:102,
        firstName:'sam',
        lastName:'samuel',
        district:'nyk',
        qualification:'B.tech',
    });
    newMember.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err);
    });

});

//for insert using post man body>raw section
router.post('/add',function(req,res,next){
    let newMember=new myformModel({
        //left side field as same as in schema in myform.model.js
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        district:req.body.district,
        qualification:req.body.qualification
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
        const myformShow=await myformModel.find();
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
        const myfirstName=req.query.firstName;
        const myformSearch=await myformModel.find({firstName:myfirstName});
        res.send({status:200,length:myformSearch.length,myformSearch});
    }catch(err){
        res.status(500).send({error:err.message});
    }
})
//findbyid
router.get('/listbyid',async function(req,res,next){
    try{
        //take values of id from postman params
        const myformid=req.query.id;
        const myformQuery=await myformModel.findById(myformid);
        res.status(200).send({status:200,myformQuery:myformQuery})
    }catch(err){
        res.status(500).send({error:err.message});
    }
});

router.put('/update',async function(req,res,next){
    try{
        const qualification=req.query.qualification;
        const result=await myformModel.updateMany(
            {lastName:"samuel"},
            {$set:{qualification:qualification}}
        );
         res.status(200).send({
            status:200,
            message:"update successful"
         }
         
            
         );
        }catch(err){
            res.status(500).send({status:500,error:err.message})
                 }
        });


        //
        router.put('/updatebyid',async function(req,res,next){
            try{
                const idof_field=req.query.id;
                const fname=req.query.firstName;
                //update document by id
                const result=await myformModel.findByIdAndUpdate(
                    idof_field,{firstName:fname},
                    
                );
                 res.status(200).send({
                    status:200,
                    message:"update successful using id",
                 });
                }catch(err){
                    res.status(500).send({status:500,error:err.message});
                    }
                });
        
    


module.exports=router;