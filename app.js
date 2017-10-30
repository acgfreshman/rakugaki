var express = require("express");
var path = require("path");
var bodyParse = require("body-parser");
var morgan = require("morgan");
var app = express();

const PORT = process.env.port || 3000;

//export routes files
var index = require('./routes/index');
var redirect  = require('./routes/redirect');
var login = require('./routes/login');
var register = require('./routes/register');
/*
module for database testing
var user = require('./routes/user');
*/

//use routes files
app.use('/',index);
app.use('/code',redirect);
app.use('/login', login);
app.use('/register', register);

/*
   route for database testing
   app.use('/user', user);
*/

//set express file path
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//set express jason parsing
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));
app.use(morgan("short"));

app.listen(PORT);



