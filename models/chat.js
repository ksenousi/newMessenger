const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const UserSchema = require('./user');

// chat schema
const ChatSchema = mongoose.Schema({
  chatname: {
    type: String
  },
  username: {
    type: String,
  },
  recipient: {
   type: String,
  },
  messages: [{
    content: String,
    outgoing: Boolean,
    timeSent: String,
    timeReceived: String,
    timeSeen: String
  }]
    
});

const Chat = module.exports = mongoose.model('Chat', ChatSchema);

module.exports.getChatByName = function(username, chatname, callback) {

   Chat.findOne({'username': username, 'chatname': chatname},callback);
}

module.exports.addMessage = function(user, chatname, message, callback) {

  Chat.update({'username': username, 'chatname': chatname},{'$push':{'messages':message}},callback);
}


