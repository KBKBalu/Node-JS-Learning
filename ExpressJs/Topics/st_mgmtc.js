
// State management Concept on Client Side is COOKIES
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

//var cookie_name='abhra';
app.get('/', function(req, res) {
	res.cookie('abhra' , 'NodeJs Training Class');
	res.end('Hi Hello...!');
    //console.log("Cookies: ", req.cookies)
});
app.get('/remove', function(req, res) {
	res.clearCookie('abhra');
	res.end('Hi Hello...!');
    //console.log("Cookies: ", req.cookies)
});

app.listen(8081 ,function(){
	console.log("server listening at 8081");
});
