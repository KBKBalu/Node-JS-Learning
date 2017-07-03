
//Employee Table Creation

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("Employee", function(err, res) {
    if (err) throw err;
    console.log("Now You are in mydb Database");
    console.log("Employee Table created!");
    db.close();
  });
});