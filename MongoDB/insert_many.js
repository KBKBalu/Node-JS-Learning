
//Inserting multiple Records in Employee Table

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'Balu', address: 'Charikonda st 1'},
    { name: 'KBK', address: 'Kmgt'},
    { name: 'MB', address: 'Apple st 143'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Shekar', address: 'Valley 345'},
    { name: 'Ismail', address: 'Ghatkesar'},
    { name: 'Sheshu', address: 'Madhapur'},
    { name: 'Techmo', address: 'Sky st 331'},
    { name: 'Veda', address: 'GachiBowli'},
    { name: 'Srinu', address: 'Yellow Garden '},
    { name: 'Srikanth', address: 'Park Lane '},
    { name: 'Lovely', address: 'Hi-Tech'},
    { name: 'Sahithya', address: 'Uppal'}
  ];
  db.collection("Employee").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    console.log(res);
    db.close();
  });
});