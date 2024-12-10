const express=require('express');
const router=express.Router();

router.post('/',(req,res)=>{
    res.send("router testing-welcome");
})

module.exports=router;