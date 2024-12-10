const express=require('express');
const router=express.Router();
const products=('./routes/products')
const users=('./routes/user')
router.post('',(req,res)=>{
    res.send("router testing-welcome");
})

module.exports=router;