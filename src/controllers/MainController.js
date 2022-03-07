const UserModel= require("../models/userModel");
const ProductModel =require("../models/productModel");
const OrderModel = require("../models/orderModel");


const createUser= async function (req, res) {
    let data= req.body
    let UserData = await UserModel.create(data)
    
    res.send({msg: UserData})
}

   const createProduct = async function (req, res) {
       let product = req.body
       let ProductData = await ProductModel.create(product)
       res.send ({msg:ProductData})
   }
    


module.exports.createUser= createUser
module.exports.createProduct = createProduct