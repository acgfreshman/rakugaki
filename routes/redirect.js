var express = require("express");
var router = express.Router();
var shortid36  = require("shortid36");

//set for random url generator
shortid36.characters("0123456789ABCDEFGHIJKLMNPOQRSTUVWXYZ");

router.get("/", function (req,res) {
    //generate a random url and redirect
    var url = '/code/' + shortid36.generate();
    //add url to database as UID
    res.redirect(url);
});

router.get("/*", function (req,res) {
    //check url is in the database
    var url = req.params[0];
    console.log(url);
    //direct the webpage to notepad
    res.render("code");
});

module.exports = router