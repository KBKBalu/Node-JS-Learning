/*var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
app.use(express.cookieParser())

app.get('/', function(req, res) {

	res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
    console.log("Cookies: ", req.cookies)
})
app.listen(8081)
console.log("server listening at 8081")*/

var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
var cookie_name='Balu';
app.get('/', function(req, res) {
	res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
    console.log("Cookies: ", req.cookies)
})
app.listen(8081)
console.log("server listening at 8081")