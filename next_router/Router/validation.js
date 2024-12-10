const express=require('express');
const router=express.Router();

function validation(req,res,next){
    if(req.token){
        console.log("Token validated");
        next();
    }else{
        res.status(403).send("<h1>forbidden token missing</h1>")
    }

}


module.exports=validation;