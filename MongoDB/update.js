var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Charikonda" };
  var newvalues = { name: "Balu", address: "Kuwait" };
  db.collection("Employee").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 record updated");
    db.close();
  });
});