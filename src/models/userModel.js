const mongoose = require('mongoose')

const userModel = new mongoose.Schema ({
name:String,
balance:Number,
Address:String,
Age: Number,
gender:{
    type:String,
    enum:["male","female","others"]
},
isFreeAppUser:{Boolean,default:false}

})
module.exports =mongoose.model("userModel",userModel)