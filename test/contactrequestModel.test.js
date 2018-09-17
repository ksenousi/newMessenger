/* eslint no-undef: 0 */ // --> OFF

const mongoose = require('mongoose');
const assert = require('assert');
const Contactrequest = require('../models/contactrequest');

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
    console.error(err);
    // throw err;
  });
  done();
});

describe('Contactrequest model schema is correct', () => {
  after((done) => {
    Contactrequest.remove({}, () => done());
  });

  it('accepts correct fields', (done) => {
    const sender = 'bob';
    const recipient = 'jim';

    Contactrequest.addContactRequest(recipient, sender, (err, contactrequest) => {
      assert.equal(err, null);
      assert.equal(contactrequest.sender, sender);
      assert.equal(contactrequest.recipient, recipient);
      done();
    });
  });

  it('rejects missing fields', (done) => {
    const sender = 'bob';
    const recipient = null;

    Contactrequest.addContactRequest(recipient, sender, (err) => {
      assert.notEqual(err, null);
      done();
    });
  });
});

describe('Contact request model functions are correct', () => {
  const sender = 'bob';
  const recipient = 'jim';

  before((done) => {
    Contactrequest.addContactRequest(recipient, sender, () => done());
  });

  after((done) => {
    Contactrequest.remove({}, () => done());
  });

  it('get received contactrequests', (done) => {
    Contactrequest.getReceivedContactRequests(recipient, (err, requests) => {
      assert.equal(err, null);
      assert.equal(requests.length, 1);
      assert.equal(requests[0].sender, sender);
      done();
    });
  });
});
