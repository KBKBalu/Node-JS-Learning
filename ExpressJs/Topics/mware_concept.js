
var express = require('express');
var app = express();

app.get("/", log, hello);

function log(req, res, next){
	console.log('First ,log function calls here');
	next();
}
function hello(req, res, next){
	console.log('Now ,Hello function calls here');
	console.log('Hello Developers');
	next();
}

app.listen(8081, function(){
	console.log('Server started at 8081 Port');
});