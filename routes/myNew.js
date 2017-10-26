var express = require("express");
var router = express.Router();
var shortid36  = require("shortid36");

//set for random url generator
shortid36.characters("0123456789ABCDEFGHIJKLMNPOQRSTUVWXYZ");

router.get("/new", function (req, res) {
    res.render("code");
});

/*
router.get("/new", function (req,res) {
    res.render("index");



    var newUrl = '/' + shortid36.generate();
    console.log(newUrl);
});
*/
module.exports = router