const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId
const orderModel = new mongoose.Schema({
    userId :{
        type:objectid,
        ref: userModel
    },
    productId :{
        type : objectid,
        ref: productModel
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date: String
})

module.exports = mongoose.model("orderModel",orderModel)