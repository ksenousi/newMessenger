const mongoose = require('mongoose');

// chat schema
const ChatSchema = mongoose.Schema({
  chatname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  messages: [{
    content: String,
    outgoing: Boolean,
  }],

});

const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;

module.exports.getChatByName = (username, chatname, callback) => {
  Chat.findOne({ username, chatname }, callback);
};

module.exports.addChat = (newChat, callback) => {
  newChat.save(callback);
};

module.exports.addMessage = (username, chatname, message, callback) => {
  Chat.update({ username, chatname }, { $push: { messages: message } }, callback);
};
