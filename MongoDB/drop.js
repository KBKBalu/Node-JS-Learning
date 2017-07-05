var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("mychoice").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Table deleted");
    db.close();
  });
});