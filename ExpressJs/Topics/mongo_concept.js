var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://192.168.1.61:27017/mydb";

MongoClient.connect(url, function(err, db) {
	assert.equal(err, null);
	console.log("Connected with mydb");

var collection = db.collection('oss');
collection.insertOne({ name: "Hybris", address: "USA" ,contact:'9988665544'},
	function(err , result){
		assert.equal(err, null);
		console.log('Data Inserted');
	});

collection.find({}).toArray(function(err, docs){
			assert.equal(err, null);
			console.log('Record Found');
			console.log(docs);
  });
});
