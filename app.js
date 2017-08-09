const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
var io = require('socket.io');
var ioServer = io.listen(8000);


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

var clients = [];

ioServer.on('connection', socket => {
  console.info('New client connected (id=' + socket.id + ').');
  clients.push(socket);

  socket.on('disconnect', () => {
    var index = clients.indexOf(socket);
    if(index != -1) {
      clients.splice(index,1);
      console.info('Client gone (id=' + socket.id + ').');
    }
  })
})