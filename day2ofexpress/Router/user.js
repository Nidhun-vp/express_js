const router = require("./product");

router.get('/search/:key([A-E]{5})',(req,res)=>{
    res.send('user request received with a pattern of xxxx'+req.params.key)

});

router.get('/getdetails/:id',(req,res)=>{
    res.send('users request received with Id '+req.params.id)

});

router.get('/',(req,res)=>{
    res.send('users request received ')

});

router.get('/getde/:city/:town',(req,res)=>{
    res.send('users request received with city '+req.params.city)

});

router.get('/get-users/',(re,res)=>{
    res.send('userlist request received')
})
module.exports=router;