var mongoose = require('mongoose');
var assert = require('assert');
const Chat = require('../models/chat');

before(function (done) {
	// Connect to database
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/test', {
		useMongoClient: true,
	});

	// On Error
	mongoose.connection.on('error', (err) => {
		console.log('Error : ' + err);
	});

	Chat.remove({},()=>{
		console.log("everything removed");
	});
	
	done();
});

	describe('checkseenmessages', function () {
		it("populate chat", async function () {

			let testChat = new Chat({
				chatname: 'testChatname',
				username: 'testUsername',
				recipient: 'testRecipient',
				messages: [{ content: 'msg1', outgoing: false }, { content: 'msg2', outgoing: false }, { content: 'msg3', outgoing: false }]
			});

			await testChat.save();

		});

		it("change to seen", function (done) {

			//Chat.setMessagesSeen('testUsername','testChatname',[])
		});

		it("check function changes the expected messages as seen", function (done) {

			Chat.find({}, (err, result) => {
				assert.equal(err, null);
				done();
			});
		});
	});