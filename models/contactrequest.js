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
  accepted: {
    type: Boolean,
    require: true
  },

});

const ContactRequest = module.exports = mongoose.model('ContactRequest', contactRequestSchema);

module.exports.addContactRequest = function (contact, username, callback) {
  var contactRequest = new ContactRequest({ 'sender': username, 'recipient': contact });
  contactRequest.save(callback);
}

module.exports.getContactRequests = function (username, callback) {
  ContactRequest.find({ 'recipient': username }, callback);
}

module.exports.removeContactRequest = function (username, recipient, callback) {
  ContactRequest.remove({ 'sender': username, 'recipient': recipient }, callback);
}


