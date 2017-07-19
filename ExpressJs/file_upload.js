var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: './uploads'}));
//var upload =multer({dest:'./uploads'});
app.use(multer({dest:'./uploads/'}).single('file'));

app.get('/index_file.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index_file.html" );
})

app.post('/file_upload', function (req, res) {
   console.log(req.file);
   //return false;
   console.log(req.file.originalname);
   console.log(req.file.path);
   console.log(req.file.mimetype);
   var file = __dirname + "/" + req.file.originalname;
   
   fs.readFile( req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.file.originalname
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = 'localhost'
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})