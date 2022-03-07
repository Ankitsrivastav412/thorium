const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const MainController = require("../controllers/MainController");



router.post('/createUser',MainController.createUser);
router.post('/createProduct',MainController.createProduct);


module.exports=router