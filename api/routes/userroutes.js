const express = require("express");
const router = express.Router();
const UserController=require("../controllers/loginController");
router.post("/user", UserController.create_user);
module.exports=router;