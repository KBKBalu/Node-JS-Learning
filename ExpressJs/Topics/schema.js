var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var abhraSchema = new Schema({
	topic: {
		type: String,
		require: true,
		unique: true
	},
	description: {
		type: String,
		required: true

	}
});
var Abhra = mongoose.model('oss',abhraSchema);
module.exports= Abhra;