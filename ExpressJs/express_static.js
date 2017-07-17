var express = require('express');
var app = express();

// we can import an image by using URL (http://localhost:8081/images/penguins.jpg)
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})