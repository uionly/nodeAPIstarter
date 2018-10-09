
const mongoose = require('mongoose');
const itemSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type: String, required:true}
});
const model = mongoose.model('item',itemSchema);
module.exports=model;
