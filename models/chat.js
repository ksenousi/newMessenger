const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const UserSchema = require('./user');

// chat schema
const ChatSchema = mongoose.Schema({
  user: {
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

const User = module.exports = mongoose.model('Chat', ChatSchema);

