
//basic setup
const express=require('express');
const mongoose=require('mongoose');
const {db_url,db_port}=require('./connection')
var app=express();
//connect mongodb

// mongoose.connect('mongodb://localhost:27017/books');//db url
// mongoose.connection.on('connected',()=>{
//     console.log("connection successful");
// })




 

// app.listen(3000)//db_port

mongoose.connect(db_url);//db url
mongoose.connection.on('connected',()=>{
    console.log("connection successfully");
})




 

app.listen(db_port)//db_port