const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();
const server = require('http').createServer(app);

const config = require('./config/database');
const users = require('./routes/users');
const chats = require('./routes/chats');
const requests = require('./routes/requests');
const contacts = require('./routes/contacts');

const env = process.env.NODE_ENV || 'development';

const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  // console.log(`Connected to database${config.database}`);
});

mongoose.connection.on('error', (err) => {
  // console.log(`Error : ${err}`);
  throw err;
});

if (env === 'production') {
  app.get('*', (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') { res.redirect(`https://${req.get('Host')}${req.url}`); } else { next(); }
  });
}

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/chats', chats);
app.use('/requests', requests);
app.use('/contacts', contacts);

app.use((req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

require('./socket.js')(server);
