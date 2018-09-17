const express = require('express');

const router = express.Router();
const passport = require('passport');
const ContactRequest = require('../models/contactrequest');

// add contact request
router.post('/addcontactrequest', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const contact = req.body.contact;
  const username = req.user.username;
  ContactRequest.addContactRequest(contact, username, (err) => {
    if (err) {
      res.json({ success: false });
      throw err;
    } else {
      res.json({ success: true });
    }
  });
  next();
});

// get contact request
router.get('/getcontactrequests', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const username = req.user.username;
  ContactRequest.getReceivedContactRequests(username, (err, requests) => {
    if (err) throw err;
    res.json(requests);
  });
  next();
});

// remove contact request
router.post('/removecontactrequest', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const username = req.user.username;
  const contact = req.body.contact;

  ContactRequest.removeContactRequest(username, contact, (err) => {
    if (err) {
      res.json({ success: false });
      throw err;
    } else {
      res.json({ success: true });
    }
  });
  next();
});

module.exports = router;
