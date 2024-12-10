const express=require("express");
const product=require('./Router/product.js')

const app1=express()
app1.use('/page1',product)


app1.listen(4000)
console.log("app lisening at port 4000")