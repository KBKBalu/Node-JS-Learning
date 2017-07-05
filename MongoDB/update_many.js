var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "AbhraCloud"} };
  db.collection("Employee").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record(s) updated");
    db.close();
  });
});