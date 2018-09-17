const mongoose = require('mongoose');

// contactRequest schema
const contactRequestSchema = mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
});

const ContactRequest = mongoose.model('ContactRequest', contactRequestSchema);
module.exports = ContactRequest;

module.exports.addContactRequest = (contact, username, callback) => {
  const contactRequest = new ContactRequest({ sender: username, recipient: contact });
  return contactRequest.save(callback);
};

module.exports.getReceivedContactRequests = (username, callback) => {
  return ContactRequest.find({ recipient: username }, callback);
};

module.exports.getSentContactRequests = (username, callback) => {
  return ContactRequest.find({ sender: username }, callback);
};

// receiver accepts request and therefore their username is passed as the receiver
module.exports.removeContactRequest = (username, recipient, callback) => {
  return ContactRequest.remove({ sender: recipient, recipient: username }, callback);
};
