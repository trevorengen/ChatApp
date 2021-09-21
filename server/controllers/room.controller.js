const Room = require('../models/room.model');

// CREATE
module.exports.createNewRoom = (req, res) => {
    Room.create(req.body)
        .then(room => res.json({ room: room }))
        .catch(err => res.json({ error: err }));
};

// RETRIEVE
module.exports.getRoomById = (req, res) => {
    Room.findById(req.params.id)
        .then(room => res.json({ room: room }))
        .catch(err => res.json({ error: err }));
};

// UPDATE
module.exports.updateRoomUsers = (req, res) => {
    Room.findById(req.params.id)
        .then(room => {
            const newList = [req.body, ...room.users];
            Room.updateOne({ _id: req.params.id }, { users: newList }, { new: true })
                .then(room => res.json({ room: room }))
                .catch(err => res.json({ error: err }));
        })
        .catch(err => res.json({ error: err }));
};