const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Chat = require('../models/chat');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg:'User registered'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
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
                return res.json({success: false, msg: 'wrong password'});
            }
        })

    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

// Validate
router.get('/validate', (req, res, next) => {
    res.send('validate');
});

// Search Contacts
router.get('/search',passport.authenticate('jwt', {session:false}),(req,res,next) => {
    const contact = req.get('username');
    User.find({"username" : {$regex : ".*"+contact+".*"}},(err,contacts) => {
       if (err) return handleError(err);
       if (contacts != null && contacts != '') {
           var results = [];
           for(var i=0;i<contacts.length;i++){
               results.push({'username': contacts[i].username});
           }
           res.json(results);
       } else {
           res.send({'error': 404});
       }
    });

});

// Add Contact
router.post('/addcontact', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    
    const username = req.user.username;
    const contact = req.body.contact;

     User.findOne({'username':req.user.username},(err, user) => {
        console.log(user);
    });

    User.update({'username':username},{'$push':{'contacts':contact}},(err,any) => {
        if(err){
            throw err;
            res.json({'success':0});
        } else {
            res.json({'success':1});
        }
    });

    User.findOne({'username':req.user.username},(err, user) => {
        console.log(user);
    });

});

// Get Chats
router.get('/getchat', passport.authenticate('jwt', {session:false}), (req,res,next) => {

    const username = req.user.username;
    const recipient =  req.get('recipient');

    Chat.findOne({'username': username, 'recipient': recipient},(err, chat) => {
        if(err) {
            throw err;
        }
       res.json(chat);
    });

});


module.exports = router;
