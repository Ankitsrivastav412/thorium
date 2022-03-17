const express = require('express');
const router = express.Router();

const BlogController= require("../controllers/blogController")

const AutherController= require("../controllers/AutherController")
const middleWare   = require("../MiddleWare/auth")

router.post("/auther",AutherController.createauther)

router.post("/blog",middleWare.tokenCheck,BlogController.createblog)

router.get("/getblogg",middleWare.tokenCheck,BlogController.getBlog)

router.put("/updateblogg/:blogID",middleWare.tokenCheck,BlogController.updateblog)

router.delete("/deleteblogg/:blogID",middleWare.tokenCheck,BlogController.deletebyId)

router.delete("/deletequery",BlogController.deletebyQuery)
router.post("/login",BlogController.login)
module.exports = router;