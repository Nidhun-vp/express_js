const express=require('express');
//object creation
const users=require('./Router/user')

const products=require('./Router/product')
const obj=express();


obj.use('/product',products)
obj.use('/users',users)

obj.listen(6000);
