const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const UserSchema = require('./user');

// chat schema
const ChatSchema = mongoose.Schema({
  recipient: {
   type:[mongoose.Schema.Types.ObjectId],
   ref: 'User' 
  },
  messages: {
   type:[mongoose.Schema.Types.ObjectId],
   ref: 'Message' 
  }
    
});

const User = module.exports = mongoose.model('Chat', ChatSchema);

