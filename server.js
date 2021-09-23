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

const io = require('socket.io')(server, { cors: {
    origin: 'http://localhost:3000',
} });

io.on('connection', socket => {

    socket.on('join', (room) => {
        console.log(`Joined room ${room}.`);
        socket.join(room);
    });

    socket.on('sendMessage', (arg) => {
        socket.to(arg.roomId).emit('recieveMessage', arg.roomId);
    });

    socket.on('start_call', (data) => {
        socket.to(data.userInfo.currentSocket).emit('recieving_call', data.caller);
    });

    // WEB RTC COMMUNICATION EVENTS
    socket.on('call', (roomId) => {
        console.log(`Server call on ${roomId}.`);
        socket.broadcast.to(roomId).emit('call');
    });

    socket.on('offer', (event) => {
        console.log(event)
        console.log(`Server offer of: ${event}.`);
        socket.broadcast.to(event.roomId).emit('offer', event.sdp);
    });

    socket.on('answer', (event) => {
        console.log(event)
        console.log(`Server answer of: ${event}.`);
        socket.broadcast.to(event.roomId).emit('answer', event.sdp);
    });

    socket.on('ice_candidate', (event) => {
        console.log(event)
        socket.broadcast.to(event.roomId).emit('ice_candidate', event);
    });

    // REMOTE VIDEO EFFECT CHANGES
    socket.on('effectChange', (data) => {
        socket.broadcast.to(data.roomId).emit('effectChange', data.effect);
    });

    socket.on('effectValueChange', (data) => {
        socket.broadcast.to(data.roomId).emit('effectValueChange', data.effectValue);
    });
});