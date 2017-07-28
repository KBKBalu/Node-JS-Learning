var mongoose = require('mongoose');
var assert = require('assert');

var Abhra = require('./schema.js');

var url = "mongodb://192.168.1.61:27017/mydb";
mongoose.connect(url);

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error'));
db.on('open', function(){
	console.log('Connected');
});

var newTopic = Abhra({
	
	topic: 'ExpressJs',
	description: 'Express Framework'
});

newTopic.save(function(err){
	if(err) throw err;

	Abhra.find({}, function(err, data){
	  	if(err) throw err;
	  	console.log(data);

	});
});
