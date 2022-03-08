const UserModel= require("../models/userModel");
const ProductModel =require("../models/productModel");
const OrderModel = require("../models/orderModel");




const createUser= async function (req,res){
    let userDetails = req.body;
    userDetails.freeAppUser = req.isFreeAppUser;
    let userCreated = await userModel.create(userDetails);
    res.send({ data: userCreated });
}


   const createProduct = async function (req, res) {
       let product = req.body
       let ProductData = await ProductModel.create(product)
       res.send ({msg:ProductData})
   }
    
   const createOrder = async function(req, res) {
    let orderDetails = req.body;
    let user = await userModel.findById(orderDetails.userId);
    if (!user) {
        res.send({ message: "User not exist.and check userId" });
    }

    let product = await productModel.findById(orderDetails.productId);
    if (!product) {
        res.send({ message: "Product not exist. check productId" });
    }

    let isFreeApp = req.isFreeAppUser;
    let orderAmount;

    if (isFreeApp) {
        orderAmount = 0;
    } else if (!isFreeApp && user.balance >= product.price) {
        orderAmount = product.price;
    } else {
        res.send({
            message: "User does not have balance. Order can not be processed",
        });
    }

    orderDetails.amount = orderAmount;
    orderDetails.isFreeAppUser = isFreeApp;
    orderDetails.date = Date();
    let orderCreated = await orderModel.create(orderDetails);
    if (!isFreeApp && user.balance >= product.price) {
        await userModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(orderDetails.userId) }, { balance: user.balance - product.price });

    }

    res.send({ data: orderCreated });
};


    


module.exports.createUser= createUser
module.exports.createProduct = createProduct
module.exports.createOrder = createOrder