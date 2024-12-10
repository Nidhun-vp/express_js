const mongoose=require('mongoose');

var student_schema=mongoose.Schema({
    student_id:Number,
    first_name:String,
    last_name:String,
    age:Number,
    dob:String,
    department:String

});

StudentModel=mongoose.model('student_mongoose_collection',student_schema);

module.exports=StudentModel;