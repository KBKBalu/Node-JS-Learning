
// State management Concept on Server Side is SESSIONS

var express = require('express');
var cookieParser = require('cookie-parser');
var session= require('express-session');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(session({secret: 'secretkey' ,saveUnintialized: true, resave: true, cookie:{maxAge: 60000}}));

app.get('/', function(req, res, next){
	if(req.session.views) {
		req.session.views++;
		res.setHeader('Content-Type' ,'text/html')
		res.write('<p>Views: '+ req.session.views + '</p>')
		res.write('<p>Expires in: '+ (req.session.cookie.maxAge / 1000)+ 's</p>')
		res.end()

	} else{
		req.session.views = 1
		res.write('Session is Started....\n')
		res.end('Refresh Page!')


	}
});

app.listen(2017 ,function(){
	console.log("server listening at 2017");
});

