const express = require('express');
const router = express.Router();
const passport = require('passport');
const Chat = require('../models/chat');

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

module.exports = router;