

//middleware to create token
function Token(req,res,next){
    const token='1234';
    console.log(req);

    req.token=token;
    req.name='nidhun'
    console.log('creating token ....');
    next();
}

module.exports=Token