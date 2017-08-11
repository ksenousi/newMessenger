const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const UserSchema = require('./user');

// chat schema
const ChatSchema = mongoose.Schema({
  chatname: {
    type: String,
    require:true
  },
  username: {
    type: String,
    require:true
  },
  recipient: {
   type: String,
   require:true
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

module.exports.addChat = function(newChat,callback) {
  newChat.save(callback);
}

module.exports.addMessage = function(username, chatname, message, callback) {

  Chat.update({'username': username, 'chatname': chatname},{'$push':{'messages':message}},callback);
}


