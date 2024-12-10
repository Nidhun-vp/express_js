const express=require('express');
//object creation
const Token=require('./Router/token')

const validation=require('./Router/validation')
const app=express();




const middlewares=[Token,validation]    
app.get("/profile",middlewares,(req,res)=>{
    console.log("user logged");
    res.send("<h1>successfully</h1>")
});

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})



