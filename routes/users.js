const express = require('express');

const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const ContactRequest = require('../models/contactrequest');

// Register
router.post('/register', (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, (err) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (passErr, isMatch) => {
      if (passErr) throw passErr;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800, // 1 week worth of seconds
        });

        return res.json({
          success: true,
          token: `JWT ${token}`,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
          },
        });
      }
      return res.json({ success: false, msg: 'wrong password' });
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({ user: req.user });
});

// Validate
router.get('/validate', (req, res, next) => {
  res.send('validate');
});

// Search Users
router.get('/search', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const searchCriteria = req.get('searchcriteria');
  const username = req.user.username;
  const userContacts = req.user.contacts;
  let results = [];

  User.find({ username: { $regex: `.*${searchCriteria}.*` } }).exec()
    .catch((err) => {
      res.json({ success: false });
      throw err;
    })
    .then((users) => {
      if (users !== '') {
        // filter out own username
        results = users.map(result => result.username).filter(result => result !== username);

        // map results to only username and type
        results = results.map((result) => {
          return { username: result, type: 'newUser' };
        });
        // check if is in contacts
        results = results.map((result) => {
          if (userContacts.indexOf(result.username) > -1) {
            return { username: result.username, type: 'isContact' };
          } return result;
        });
        // check for sent requests
        return ContactRequest.getSentContactRequests(username).exec();
      }
      res.json({ error: 404 });
    })
    .catch((err) => {
      res.json({ success: false });
      throw err;
    })
    .then((sentRequests) => {
      const requestRecipients = sentRequests.map(request => request.recipient);
      results = results.map((result) => {
        if (requestRecipients.indexOf(result.username) > -1) {
          return { username: result.username, type: 'requestSent' };
        } return result;
      });
      // check for received requests
      return ContactRequest.getReceivedContactRequests(username).exec();
    })
    .catch((err) => {
      res.json({ success: false });
      throw err;
    })
    .then((receivedRequests) => {
      const requestSenders = receivedRequests.map(request => request.sender);
      results = results.map((result) => {
        if (requestSenders.indexOf(result.username) > -1) {
          return { username: result.username, type: 'requestReceived' };
        } return result;
      });
      res.json(results);
    });
});

module.exports = router;
