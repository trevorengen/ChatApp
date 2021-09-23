const Message = require('../models/message.model');

// CREATE
module.exports.createMessage = (req, res) => {
    Message.create(req.body)
        .then(message => res.json({ message: message }))
        .catch(err => res.status(400).json({ error: err }));
};

// RETRIEVE
module.exports.getAllFromRoom = (req, res) => {
    Message.find({ roomId: req.params.roomid })
        .then(messages => res.json({ messages: messages }))
        .catch(err => res.status(400).json({ error: err }));
};

// UPDATE

//DELETE
module.exports.deleteAllMessages = (req, res) => {
    Message.deleteMany({})
        .then(response => res.json({ response: response }))
        .catch(err => res.status(400).json({ error: err }));
};