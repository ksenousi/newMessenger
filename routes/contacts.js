const express = require('express');

const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const Chat = require('../models/chat');
const ContactRequest = require('../models/contactrequest');


// Add Contact for both users
router.post('/addcontact', passport.authenticate('jwt', { session: false }), (req, res) => {
  const username = req.user.username;
  const contact = req.body.contact;

  User.update({ username }, { $addToSet: { contacts: contact } }, (err) => {
    if (err) {
      res.json({ success: false });
      throw err;
    } else {
      res.json({ success: true });
    }
  });

  User.update({ username: contact }, { $addToSet: { contacts: username } }, (err) => {
    if (err) throw err;
  });

  new Chat({ chatname: contact, username, recipient: contact }).save();
  new Chat({ chatname: username, username: contact, recipient: username }).save();

  ContactRequest.removeContactRequest(username, contact, (err) => {
    if (err) throw err;
  });
});

// remove contact for both
router.post('/removecontact', passport.authenticate('jwt', { session: false }), (req, res) => {
  const username = req.user.username;
  const contact = req.body.contact;

  User.update({ username }, { $pull: { contacts: contact } }, (err) => {
    if (err) {
      res.json({ success: false });
      throw err;
    } else {
      res.json({ success: true });
    }
  });

  User.update({ username: contact }, { $pull: { contacts: username } }, (err) => {
    if (err) throw err;
  });

  Chat.remove({ username, chatname: contact }, (err) => {
    if (err) throw err;
  });

  Chat.remove({ username: contact, chatname: username }, (err) => {
    if (err) throw err;
  });
});

module.exports = router;
