var express = require("express");
var path = require("path");
var bodyParse = require("body-parser");
var morgan = require("morgan");
var shortid36 = require("shortid36");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io").listen(server);

//export routes files
var index = require('./routes/index');


//use routes files
app.use('/',index);

const PORT = process.env.port || 3000;


//set for random url generator
shortid36.characters("0123456789ABCDEFGHIJKLMNPOQRSTUVWXYZ");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));
app.use(morgan("short"));

app.use("/new", function (req,res) {
    //generate a random url and redirect
    var url = '/' + shortid36.generate();
    //add url to database as UID

    res.redirect(url);
});

app.listen(PORT, function () {

});



