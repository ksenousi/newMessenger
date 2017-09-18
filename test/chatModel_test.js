
var mongoose = require('mongoose');
var assert = require('assert');
const Chat = require('../models/chat');

before(function (done) {
	console.log("sup");
	// Connect to database
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/test', {
		useMongoClient: true,
	});

	// On Connection
	mongoose.connection.on('connected', () => {
		console.log('Connected to database');
	});

	// On Error
	mongoose.connection.on('error', (err) => {
		console.log('Error : ' + err);
	});
	done();
});

describe('...', function () {
	it("....", function (done) {
		console.log("describe");
		// ...
		Chat.find({}, (err, result) => {
			assert.equal(err,null);
			console.log("one result" + result);
			assert.equal(result,"");
			done();
		});
	});
});