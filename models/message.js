const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const UserSchema = require('./user');

// message schema
const MessageSchema = mongoose.Schema({
  content: {
    type: String
  },
  sender: {
   type:[mongoose.Schema.Types.ObjectId],
   ref: 'User' 
  },
  timeSent: {
    type: String
  },
  timeReceived: {
    type: String
  },
  timeSeen: {
    type: String
  }
    
});

const User = module.exports = mongoose.model('Message', MessageSchema);