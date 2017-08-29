const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Chat = require('../models/chat');
const ContactRequest = require('../models/contactrequest');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
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

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week worth of seconds
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });

            } else {
                return res.json({ success: false, msg: 'wrong password' });
            }
        })

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

// Search Contacts
router.get('/search', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const contact = req.get('username');
    const username = req.user.username;
    const userContacts = req.user.contacts;

    User.find({ "username": { $regex: ".*" + contact + ".*" } }).exec()
        .catch(err => {
            throw err;
            res.json({ 'success': false });
        })
        .then(contacts => {
            if (contacts != null && contacts != '') {
                ContactRequest.getSentContactRequests(username).exec()
                    .catch(err => {
                        throw err;
                        res.json({ 'success': false });
                    })
                    .then(requests => {
                        results = formatResult(contacts, requests);
                        res.json(results);
                    });
            } else {
                res.json({ 'error': 404 });
            }
        });
});

function formatResult(contacts, requests) {

    let results = contacts.map(result => result.username).filter(result => result != username);
    let requestRecipients = requests.map(request => request.recipient);

    results = results.map(result => {
        if (requestRecipients.indexOf(result) > -1) {
            return { 'username': result, 'type': 'requestSent' }
        }
        else if (userContacts.indexOf(result) > -1) {
            return { 'username': result, 'type': 'isContact' }
        } else {
            return { 'username': result, 'type': 'newUser' }
        }
    });

    return results;
}

// Add Contact for both users
router.post('/addcontact', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const username = req.user.username;
    const contact = req.body.contact;

    User.update({ 'username': username }, { '$addToSet': { 'contacts': contact } }, (err, any) => {
        if (err) {
            throw err;
            res.json({ 'success': false });
        } else {
            res.json({ 'success': true });
        }
    });

    User.update({ 'username': contact }, { '$addToSet': { 'contacts': username } }, (err, any) => {
        if (err) throw err;
    });

    new Chat({ 'chatname': contact, 'username': username, 'recipient': contact }).save();
    new Chat({ 'chatname': username, 'username': contact, 'recipient': username }).save();

    ContactRequest.removeContactRequest(username, contact, err => {
        if (err) throw err;
    });
});

// remove contact for both
router.post('/removecontact', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const username = req.user.username;
    const contact = req.body.contact;

    User.update({ 'username': username }, { '$pull': { 'contacts': contact } }, (err, any) => {
        if (err) {
            throw err;
            res.json({ 'success': false })
        } else {
            res.json({ 'success': true });
        }

    });

    User.update({ 'username': contact }, { '$pull': { 'contacts': username } }, (err, any) => {
        if (err) throw err;
    });

    Chat.remove({ 'username': username, 'chatname': contact }, err => {
        if (err) throw err;
    });

    Chat.remove({ 'username': contact, 'chatname': username }, err => {
        if (err) throw err;
    });

});

// Get Chat
router.get('/getchat', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const username = req.user.username;
    const chatname = req.get('chatname');

    Chat.getChatByName(username, chatname, (err, chat) => {
        if (err) throw err;
        res.json(chat);
    });

});

// Add Chat
router.post('/addchat', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const newChat = req.body.chat;
    Chat.addChat(newChat, (err, user) => {
        if (err) {
            throw err;
            res.json({ 'success': false });
        } else {
            res.json({ 'success': true });
        }
    });

});

//add contact request
router.post('/addcontactrequest', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const contact = req.body.contact;
    const username = req.user.username;
    ContactRequest.addContactRequest(contact, username, (err, contactRequest) => {
        if (err) {
            throw err;
            res.json({ 'success': false });
        } else {
            res.json({ 'success': true });
        }
    });
});

//get contact request
router.get('/getcontactrequests', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const username = req.user.username;
    ContactRequest.getIncomingContactRequests(username, (err, requests) => {
        if (err) throw err;
        res.json(requests);
    });
});

//remove contact request
router.post('/removecontactrequest', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const username = req.user.username;
    const contact = req.body.contact;

    ContactRequest.removeContactRequest(username, contact, err => {
        if (err) {
            throw err;
            res.json({ 'success': false });
        } else {
            res.json({ 'success': true });
        }
    });
});


module.exports = router;