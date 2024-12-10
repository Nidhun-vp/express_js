express=require('express')
const app=express()

//middleware to create token
function Token(req,res,next){
    const token='1234';
    console.log(req);

    req.token=token;
    req.name='nidhun'
    console.log('creating token ....');
    next();
}

function validation(req,res,next){
    if(req.token){
        console.log("Token validated");
        next();
    }else{
        res.status(403).send("<h1>forbidden token missing</h1>")
    }

}

//route with both middleware

//order mandatory,another method:const middleware=[Token,validation]
//set in line 29 app.get("/profile",middleware,(req,res)=>{}
app.get("/profile",Token,validation,(req,res)=>{
    console.log("user logged");
    res.send("<h1>successfully</h1>")
});

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})