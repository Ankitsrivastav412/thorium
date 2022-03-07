const express = require("express");
const { globalMiddleWare } = require("../middleWare/middleWare.js");

const router = express.Router();

router.get('/test-me', function (req,res) {
    res.send ('my first ever api !')
});

router.post('/test1',function (req,res){
    res.send("this is new route")
})

module.exports = router;