mongoose=require('mongoose')


var myformschema=mongoose.Schema({
    id:Number,
    firstName:String,
    lastName:String,
    district:String,
    qualification:String

});
myformModel=mongoose.model('mern_batch',myformschema)
module.exports=myformModel;