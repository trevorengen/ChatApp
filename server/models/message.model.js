const { timeStamp } = require('console');
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, '']
    },

    message: {
        type: String,
        required: [true, ''],
        minlength: [1, ''],
    },
    roomId: {
        type: String,
        required: [true, ''],
    },
}, { timestamps: true })

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;