var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("Employee").find().limit(13).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});