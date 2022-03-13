const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const AssignmentController = require("../controllers/AssignmentController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/states", AssignmentController.getStates)




// router.get("/cowin/districtsInState/:districtId",CowinController.getdistrictbyId)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/getdistricts/:stateId",AssignmentController.getdistricts)
router.get("/getByPin",AssignmentController.getByPin)
router.post("/getByOtp",AssignmentController.getByOtp)
router.get("/getByDistrictId",AssignmentController.getByDistrictId)
router.get("/getWeather",AssignmentController.getWeather)
router.post("/meme",AssignmentController.meme)
module.exports = router;