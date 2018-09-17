/* eslint no-undef: 0 */ // --> OFF

const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../models/user');

before((done) => {
  // Connect to database
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
  });

  // On Connection
  mongoose.connection.on('connected', () => {
    // console.log('Connected to database');
  });

  // On Error
  mongoose.connection.on('error', (err) => {
    throw err;
  });
  done();
});

describe('User model schema is correct', () => {
  after((done) => {
    User.remove({}, () => done());
  });

  it('accepts correct fields', (done) => {
    const correctUser = new User({
      name: 'john',
      email: 'john@example.com',
      username: 'john',
      password: '3214kaldjsf',
      contacts: [],
    });

    User.addUser(correctUser, (err, user) => {
      assert.equal(err, null);
      assert.equal(user.username, correctUser.username);
      done();
    });
  });

  it('rejects missing fields', (done) => {
    const incorrectUser = new User({
      name: 'john',
      email: 'john@example.com',
      //   username: 'john',
      password: '3214kaldjsf',
      contacts: [],
    });
    User.addUser(incorrectUser, (err) => {
      assert.notEqual(err, null);
      done();
    });
  });
});

describe('User model functions are correct', () => {
  const testUser = new User({
    name: 'john',
    email: 'john@example.com',
    username: 'john',
    password: '3214kaldjsf',
    contacts: [],
  });

  before((done) => {
    User.addUser(testUser, () => done());
  });

  after((done) => {
    User.remove({}, () => done());
  });

  it('get user by username', (done) => {
    User.getUserByUsername(testUser.username, (err, user) => {
      assert.equal(err, null);
      assert.equal(user.username, testUser.username);
      assert.equal(user.email, testUser.email);
      done();
    });
  });
});
