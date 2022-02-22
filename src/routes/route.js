const express = require('express');
const router = express.Router();

//router.get('/jackie', function (req,res) {
  //  res.send('my name is Ankit!')
//});
router.get('/test-me', function (req, res) {
 res.send('My first ever api!')
});

module.exports = router;