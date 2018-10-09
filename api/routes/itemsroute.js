const express = require("express");
const router = express.Router();
const ItemsController=require("../controllers/itemscontroller");
router.get("/items", ItemsController.get_all_items);

router.post("/items",ItemsController.add_item);

module.exports=router;