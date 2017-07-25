var express = require('express');
var app = express();

app.get('/KBK/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});
console.log('Server Running at 8081 Port');
console.log('Use regex to restrict URL parameter matching');
app.listen(8081);


/*var express = require('express');
var app = express();

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
app.listen(8081);
console.log('Server Running at 8081 Port');
*/