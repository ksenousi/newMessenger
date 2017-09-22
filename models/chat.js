const mongoose = require('mongoose');

// chat schema
const ChatSchema = mongoose.Schema({
  chatname: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  recipient: {
    type: String,
    require: true
  },
  messages: [{
    content: String,
    outgoing: Boolean,
    seen: Boolean
  }]
});

const Chat = module.exports = mongoose.model('Chat', ChatSchema);

module.exports.getChatByName = function (username, chatname, callback) {
  Chat.findOne({ 'username': username, 'chatname': chatname }, callback);
}

module.exports.getChatlist = function (username, callback) {
  Chat.find({ 'username': username }, chats => {
    chats = chats.map(chat => {
      let numUnseen = chat.message.reduce(countUnseenMsg);
      return { 'chat': chat.chatname, 'numUnseen': numUnseen }
    });
    callback(chats);
  });
}

function countUnseenMsg(total, message){
  if (message.seen === false) total++;
}

module.exports.addChat = function (newChat, callback) {
  newChat.save(callback);
}

module.exports.addMessage = function (username, chatname, message, callback) {
  Chat.update({ 'username': username, 'chatname': chatname }, { '$push': { 'messages': message } }, callback);
}

// TODO get num of how many has been seen and update the array based on that number 
// so 3 would mean update the last three items in the array
module.exports.setMessagesSeen = function (username, chatname, ids) {
  //Chat.update({ 'username': username, 'chatname': chatname }, { '$push': { 'messages': message } });
}
