var express = require("express");
var path = require("path");
var bodyParse = require("body-parser");
var morgan = require("morgan");
var app = express();
const PORT = process.env.port || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("short"));



app.get("/", function (req, res) {
   res.render("index", {
       title: "My Express"
   });
});

app.get("/code", function (req, res) {
    res.render("code");
});

app.listen(PORT, function () {

});



