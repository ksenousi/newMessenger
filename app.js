const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const io = require('socket.io');
const ioServer = io.listen(8000);
const Chat = require('./models/chat');


// Connect to database
mongoose.connect(config.database, {
  useMongoClient: true,
});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Error : ' + err);
});


const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/',(req,res) => {
  res.send('Invalid Endpoint');
});

app.listen(port, ()=> {
  console.log('Server started on port ' + port);
});


ioServer.use(function(socket, next){
  if (socket.handshake.query && socket.handshake.query.token){
    let token = socket.handshake.query.token.replace(/^JWT\s/, '');
    jwt.verify(token, config.secret, function(err, decoded) {
      if(err) return next(new Error('Authentication error'));
      socket.decoded = decoded;
      next();
    });
  }
  next(new Error('Authentication error'));
});

var clients = [];

function client (username, socket) {
 this.username = username;
 this.socket = socket;
}

ioServer.on('connection', socket => {
  let username = socket.decoded._doc.username;
  console.info('New client connected (id=' + socket.id + ').');
  console.info('New client connected (username=' + username+ ').');
  clients.push(new client(username,socket));
  console.log(clients.length);

  socket.on('add-message', incomingMessage => {
    var chatname = incomingMessage.chatname;
    var message = incomingMessage.messageData;
    //delete message.chatname;
    // add message for both parties
    console.log("incomingmessage: "+JSON.stringify(incomingMessage));
    console.log("message: "+JSON.stringify(message));
    console.log("chatname: "+chatname);
    
    Chat.addMessage(username, chatname, message, err => {
      if(err) throw err;
    });

    message.outgoing = false;
    Chat.addMessage(chatname, username, message, err => {
      if(err) throw err;
    });

    //if recipient is online
    var index = clients.findIndex(client => client.username === chatname);
    console.log("index: "+index);
    if(index > -1){
      console.log("sent");
      incomingMessage.chatname = username;
      clients[index].socket.emit("message",incomingMessage);
    }
      
  });

  socket.on('disconnect', () => {
    var index = clients.findIndex(client => client.socket.id == socket.id);
    if(index != -1) {
      const toDelete = new Set([socket.id]);
      clients = clients.filter(obj => !toDelete.has(obj.socket.id));
      console.info('Client gone (id=' + socket.id + ').');
      console.log(clients.length);
    }
  });

});

