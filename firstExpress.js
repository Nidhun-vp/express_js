//basic setup
const Express=require('express');
var app=Express()

app.put('/create',(req,res)=>{
    res.send('create operation')
});
app.get('/read',(req,res)=>{
    res.send('Read operation')
});
app.post('/update',(req,res)=>{
    res.send('post operation')
});
app.delete('/delete',(req,res)=>{
    res.send('delete operation')
});


app.listen(3000)
console.log("app lisening at port 3000")



