//basic setup
const Express=require('express');
var app=Express()

app.get('/',(req,res)=>{
    res.send('hello everyone')
});




app.get('/home',(req,res)=>{
    const object1={
        name:"nidhun",
        place:"kottakkal",
        salary:12000          
            
    }
    res.send(object1)
})
app.listen(3000)



