const Item = require("../models/itemmodel");
const mongoose= require("mongoose");
exports.get_all_items = ((req, res, next) => {
    res.status(200).json([{
        "a": 4
    },
    {
        "2": "44"
    }
    ])
});
exports.add_item = ((req, res, next) => {

    const product = new Item({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    product.save().then((result) => {
        res.status(200).json(product);
    }).catch((err) => {
        console.log(err);
        res.status(401).json(err);

    });

});