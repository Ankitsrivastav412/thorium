const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const MainController = require("../controllers/MainController");
const middleWare = require('../middleware/middleWare');




router.post('/createProduct',MainController.createProduct);
router.post('/createUser',middleWare.validateAppType,MainController.createUser);
router.post('/createOrder',middleWare.validateAppType,MainController.createOrder);

module.exports=router