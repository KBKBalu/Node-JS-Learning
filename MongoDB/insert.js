
// Inserting the Data into Employee Table

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "3 Cube Towers" ,contact:08543-270788};
  db.collection("Employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Now you are using Employee table to Insert the Data ");
    console.log("1 record inserted");
    db.close();
  });
});