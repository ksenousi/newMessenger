module.exports = function (server) {

    const Chat = require('./models/chat');
    const config = require('./config/database');
    const jwt = require('jsonwebtoken');
    const io = require('socket.io')(server);

    // list of clients connected
    var clients = [];

    function client(username, socket) {
        this.username = username;
        this.socket = socket;
    }

    //authenticate and set up connection
    io.use(function (socket, next) {
        if (socket.handshake.query && socket.handshake.query.token) {
            let token = socket.handshake.query.token.replace(/^JWT\s/, '');
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) return next(new Error('Authentication error'));
                socket.decoded = decoded;
                next();
            });
        }
        next(new Error('Authentication error'));
    });


    io.on('connection', socket => {
        let username = socket.decoded._doc.username;
        clients.push(new client(username, socket));

        socket.on('add-message', incomingMessage => {
            var chatname = incomingMessage.chatname;
            var message = incomingMessage.messageData;

            // add to db for the sending user
            Chat.addMessage(username, chatname, message, err => {
                if (err) throw err;
            });

            // inverse direction for receiving user
            message.outgoing = false;

            // add to db for receiving user
            Chat.addMessage(chatname, username, message, err => {
                if (err) throw err;
            });

            //if recipient is online send the message
            var index = clients.findIndex(client => client.username === chatname);
            console.log("index: " + index);
            if (index > -1) {
                incomingMessage.chatname = username;
                clients[index].socket.emit("message", incomingMessage);
            }

        });

        socket.on('disconnect', () => {
            var index = clients.findIndex(client => client.socket.id == socket.id);
            if (index != -1) {
                const toDelete = new Set([socket.id]);
                clients = clients.filter(obj => !toDelete.has(obj.socket.id));
            }
        });

    });
}