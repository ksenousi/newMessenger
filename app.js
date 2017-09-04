const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const Chat = require('./models/chat');
const app = express();
var server = require('http').createServer(app);  
const users = require('./routes/users');
const chats = require('./routes/chats');
const requests = require('./routes/requests');
const contacts = require('./routes/contacts');

// Port Number
const port = process.env.PORT || 8080;

// Connect to database
mongoose.Promise = global.Promise;
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

// routes
app.use('/users', users);
app.use('/chats', chats);
app.use('/requests', requests);
app.use('/contacts', contacts);

// root routes to public folder
app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(__dirname + '/public/index.html');
});

// start server
server.listen(port, ()=> {
  console.log('Server started on port ' + port);
});

// start socketio
require('./socket.js')(server);