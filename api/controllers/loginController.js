const mongoose= require('mongoose');
const UserModel=require('../models/userModel');
// action to create user in db
exports.create_user=(req,res,next)=>{
const user=new UserModel({
    _id:new mongoose.Types.ObjectId(),
    "username":req.body.username,
    "password":req.body.password
});
user.save().then((result)=>{
res.status(201).json(user);
}).catch((err)=>{
res.status(401).json(err);
});
}
// action to check if supplied username password is valid and return a JWT
exports.user_login=(req,res,next)=>{

}