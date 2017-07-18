var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var mongoose=require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.1.61:27017/mydb';

 dataEntered=' ';
 var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }
    /*if(req.url=='/showData'){
        
        var results=showData;

       howData(res,err,data);

       res.writeHead(200,{'Content-Type':'text/plain'});
       console.log(results);
        res.write(results);
         MongoClient.connect(url,function(err,db){  
            data=db.collection('Employee').find()
            console.log(data);
          res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
           res.end();            
        }); 
           
           
    }*/
    
});
var insertDocument=function(db,callback){
    db.collection("Employee").insertOne(dataEntered),function(err,result){
        console.log("inserted into the collection");
        //callback();
    }
}
function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}
function showData(res,err,data){
    if(err){
        throw err;
    }else{
           MongoClient.connect(url,function(err,db){  
            data=db.collection('Employee').find();
            }); 
           res.writeHead(200, {'Content-Type': 'application/json'});
           res.write(data);
           res.end();
    }
 }



function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields) {

        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based on your application.

        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.write('Successfully received the data!!');
        dataEntered=fields;
        console.log(dataEntered);
        //console.log(showData);

        MongoClient.connect(url,function(err,db){
            insertDocument(db,function()
            {
                db.close();
            });
        });
        res.end();
    });
}

server.listen(8081);
console.log("server listening on 8081");

