/* eslint no-undef: 0 */ // --> OFF

const mongoose = require('mongoose');
const assert = require('assert');
const Chat = require('../models/chat');

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

describe('Chat model schema is correct', () => {
  after((done) => {
    Chat.remove({}, () => done());
  });

  it('accepts correct fields', (done) => {
    const correctChat = new Chat({
      chatname: 'chatroom 1',
      username: 'John',
      recipient: 'Jim',
      messages: [],
    });
    Chat.addChat(correctChat, (err, chat) => {
      assert.equal(err, null);
      assert.equal(chat, correctChat);
      done();
    });
  });

  it('rejects missing fields', (done) => {
    const incorrectChat = new Chat({
      chatname: 123,
      username: 'John',
      // recipient: 'Jim',
      messages: [],
    });
    Chat.addChat(incorrectChat, (err) => {
      assert.notEqual(err, null);
      done();
    });
  });
});

describe('Chat model functions are correct', () => {
  const testChat = new Chat({
    chatname: 'chatroom 1',
    username: 'John',
    recipient: 'Jim',
    messages: [],
  });

  before((done) => {
    Chat.addChat(testChat, () => done());
  });

  after((done) => {
    Chat.remove({}, () => done());
  });

  it('get chat by name', (done) => {
    Chat.getChatByName(testChat.username, testChat.chatname, (err, chat) => {
      assert.equal(err, null);
      assert.equal(chat.chatname, testChat.chatname);
      assert.equal(chat.username, testChat.username);
      done();
    });
  });

  it('add message', (done) => {
    const testMessage = {
      content: 'hi',
      outgoing: true,
    };
    Chat.addMessage(testChat.username, testChat.chatname, testMessage, (err) => {
      assert.equal(err, null);
      done();
    });
  });
});
