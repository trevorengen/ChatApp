const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: [true, 'Room name is required.']
    },
    password: {
        type: String,
    },
    users: {
        type: Array,
    },
    isDm: {
        type: Boolean,
        required: [true, ''],
    },
    host: {
        type: String,
        required: [true, ''],
    }
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;