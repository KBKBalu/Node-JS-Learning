var express = require('express');
var app = express();

//Middleware function to log request protocol

app.use('/KBK', function(req, res, next){
   console.log("A request for KBK received at " + Date.now());
   next();
});

// Route handler that sends the response
app.get('/KBK', function(req, res){
   res.send('KBK');
});

app.listen(8081);
console.log('Server Running at 8081 Port');
