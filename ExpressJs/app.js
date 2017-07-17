var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('This is about ExpressJs Framework !!');
})

var server = app.listen(8081, function () {
   var host = 'localhost';
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})