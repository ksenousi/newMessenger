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
  var contactRequest = { 'sender': username, 'recipient': contact };
  contactRequest.save(callback);
}

module.exports.getContactRequests = function (username, callback) {
  ContactRequest.find({ 'sender': username }, callback);
}