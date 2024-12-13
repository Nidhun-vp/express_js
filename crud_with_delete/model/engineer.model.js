mongoose=require('mongoose')
var engineer_schema=mongoose.Schema({
    name:String,
    branch:String,
    college:String,
    passout:Number  
})
engineerModel=mongoose.model('engineer',engineer_schema);
module.exports=engineerModel;