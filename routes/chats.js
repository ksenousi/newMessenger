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

// Get Chat list
router.get('/getchatlist', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const username = req.user.username;

  Chat.getChatlist(username, (chatlist) => {
    res.json(chatlist);
  });
});

// TODO Set messages as seen
router.post('/setmessagesseen', passport.authenticate('jwt', { session: false }), (req, _res, next) => {
  const username = req.user.username;
  const chatname = req.body.chatname;
  const numSeen = req.body.numseen;

  Chat.setMessagesSeen(username, chatname, numSeen);
});

// Add Chat
router.post('/addchat', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const newChat = req.body.chat;
  Chat.addChat(newChat, (err) => {
    if (err) {
      res.json({ success: false });
      throw err;
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
