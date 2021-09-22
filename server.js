require('dotenv').config();
require('./server/config/mongoose.config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { isObject } = require('util');
const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// ROUTES
require('./server/routes/user.route')(app);
require('./server/routes/message.route')(app);
require('./server/routes/room.route')(app);

const port = 8000;
const server = app.listen(port, () => console.log(`Listening on port ${port}.`));

const io = require('socket.io')(server, { cors: true });

io.on('connection', socket => {

    let connections = {};

    socket.on('justJoined', (arg) => {
        console.log(arg);
        connections[arg.userName] = arg.socketId;
        console.log(connections);
    })

    socket.on('join', (room) => {
        console.log(`Joined room ${room}.`)
        socket.join(room);
    });

    socket.on('sendMessage', (arg) => {
        socket.to(arg.roomId).emit('recieveMessage', arg.roomId);
    });

    socket.on('call', (roomId) => {
        socket.broadcast.to(roomId).emit('call');
    })

    socket.on('offer', (event) => {
        socket.broadcast.to(event.roomId).emit('answer', event.sdp);
    });

    socket.on('answer', (event) => {
        socket.broadcast.to(event.roomId).emit('answer', event.sdp);
    });

    socket.on('ice_candidate', (event) => {
        socket.broadcast.to(event.roomId).emit('ice_candidate', event);
    });
});