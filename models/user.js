const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: {
    type: [String],
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = { username };
  User.findOne(query, callback);
};

module.exports.addUser = (newUser, callback) => {
  const user = newUser;

  bcrypt.genSalt(10, (saltErr, salt) => {
    if (saltErr) throw saltErr;

    bcrypt.hash(newUser.password, salt, (hashErr, hash) => {
      if (hashErr) throw hashErr;
      user.password = hash;
      user.save(callback);
    });
  });
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
