var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(8081);
console.log('Server Running at 8081 Port')
console.log('Dynamic routes allows us to pass parameters and process based on thems')


// More complex of dynamic routes

/*var express = require('express');
var app = express();

app.get('/KBK/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.listen(8081);
console.log('Server Running at 8081 Port')
*/