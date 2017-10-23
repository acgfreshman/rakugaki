var express = require("express");
var path = require("path");
var bodyParse = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
   res.render("index", {
       title: "My Express"
   });
});

app.listen(3000, function () {
    console.log("Server started on Port 3000");
});



