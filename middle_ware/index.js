express=require('express')
var app=express()


app.get('/index',(req,res)=>{
    res.send('Hello world')
})

app.get('/jsondata',auth,(req,res)=>{
    mernStudents={
        name:'abhi',class:'10:30'
    }
    res.send(mernStudents)
})

app.get('/json',logging,(req,res)=>{
    mern={
        name:'mern',class:'6month'
    }
    res.send(mern)
})

function auth(req,res,next){
    console.log('inside auth middleware')
    next();
}

function logging(req,res,next){
    console.log('inside logging middleware')
    next();
}
app.listen(3000)