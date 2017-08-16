const mongoose = require('mongoose');

// contactRequest schema
const contactRequestSchema = mongoose.Schema({
  sender: {
    type: String,
    require:true
  },
  recipient: {
    type: String,
    require:true
  },
  accepted: {
    type: Boolean,
    require:true
  },

});

const Chat = module.exports = mongoose.model('ContactRequest', contactRequestSchema);

