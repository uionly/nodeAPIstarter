const mongoose= require('mongoose');
const schema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    "username":{type:String,required:true},
    "password":{type:String,required:true}
});
const model=mongoose.model("user",schema);
module.exports=model;