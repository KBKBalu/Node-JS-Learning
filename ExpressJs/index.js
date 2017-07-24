var express = require('Express');
var app = express();

var route = require('./route.js');

//both index.js and route.js should be in same directory
app.use('/route', route);

app.listen(8081)
console.log("Server Running at 8081 port ..!")