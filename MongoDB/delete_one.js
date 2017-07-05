var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: 'Mountain 21' };
  db.collection("Employee").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});