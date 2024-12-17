mongoose=require('mongoose')


var StudentSchema=mongoose.Schema({
    name:String,
    email:String,
    address:String,
    phone:Number,
});
StudentModel=mongoose.model('EmployeeTable',StudentSchema)
module.exports=StudentModel;