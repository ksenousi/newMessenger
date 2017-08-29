const mongoose = require('mongoose');

// contactRequest schema
const contactRequestSchema = mongoose.Schema({
  sender: {
    type: String,
    require: true
  },
  recipient: {
    type: String,
    require: true
  },
});

const ContactRequest = module.exports = mongoose.model('ContactRequest', contactRequestSchema);

module.exports.addContactRequest = function (contact, username, callback) {
  var contactRequest = new ContactRequest({ 'sender': username, 'recipient': contact });
 return contactRequest.save(callback);
}

module.exports.getIncomingContactRequests = function (username, callback) {
  return ContactRequest.find({ 'recipient': username }, callback);
}

module.exports.getSentContactRequests = function (username, callback) {
  return ContactRequest.find({ 'sender': username }, callback);
}

// receiver accepts request and therefore their username is passed as the receiver
module.exports.removeContactRequest = function (username, recipient, callback) {
   return ContactRequest.remove({ 'sender': recipient, 'recipient': username }, callback);
}


