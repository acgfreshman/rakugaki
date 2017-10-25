var express = require("express");
var path = require("path");
var bodyParse = require("body-parser");
var morgan = require("morgan");
var app = express();
const PORT = process.env.port || 3000;
var server = require("http").Server(app);
var io = require("socket.io").listen(server);
users = [];
connections = [];

server.listen(PORT);

io.sockets.on("connection", function (socket) {
    connections.push(socket);
    console.log("Connected %s sockets connected", connections.length);
    socket.on("disconnect", function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnected %s sockets connected", connections.length);
    });
    socket.on("send message", function (data) {
        io.sockets.emit('new message', {msg:data});
    })

})




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





