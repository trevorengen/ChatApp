const Room = require('../models/room.model');
const User = require('../models/user.model');

// CREATE
module.exports.createNewRoom = (req, res) => {
    Room.find({})
        .then(rooms => {
            for (var i=0; i<rooms.length; i++) {
                if (rooms[i].roomName.toLowerCase() === req.body.roomName.toLowerCase()) {
                    return res.status(400).json('This room already exists!');
                };
            };
        })
        .then(() => {
            Room.create(req.body)
                .then(room => res.json({ room: room }))
                .catch(err => res.status(400).json({ error: err }));
        })
        .catch(err => res.status(400).json({ error: err }));
};

// RETRIEVE
module.exports.getRoomById = (req, res) => {
    Room.findById(req.params.id)
        .then(room => res.json({ room: room }))
        .catch(err => res.status(400).json({ error: err }));
};

module.exports.getRoomByName = (req, res) => {
    Room.findOne({ roomName: new RegExp(`^${req.params.name}$`, 'i') })
        .then(room => res.json({ room: room }))
        .catch(err => res.status(400).json({ error: err }));
};

module.exports.getDmByUsers = (req, res) => {
    Room.find({ $and: [ { users: { $all: [ req.params.user1, req.params.user2 ] } }, { isDm: true } ] } )
        .then(room => res.json({ room: room }))
        .catch(err => res.status(400).json({ error: err }));
};

module.exports.getAllRooms = (req, res) => {
    Room.find({})
        .then(rooms => res.json({ rooms: rooms }))
        .catch(err => res.status(400).json({ error: err }));
};

// UPDATE
module.exports.updateRoomUsers = (req, res) => {
    Room.findById(req.params.id)
        .then(room => {
            const newList = [req.body._id, ...room.users];
            Room.updateOne({ _id: req.params.id }, { users: newList }, { new: true })
                .then(room => res.json({ room: room }))
                .catch(err => res.status(400).json({ error: err }));
        })
        .catch(err => res.status(400).json({ error: err }));
};

// DELETE
module.exports.deleteAllRooms = (req, res) => {
    Room.deleteMany({})
        .then(response => {
            User.updateMany({}, { rooms: [] }, { new: true })
                .then(response => res.json({ response: response }))
                .catch(err => res.status(400).json({ error: err }));
        })
        .catch(err => res.status(400).json({ error: err }));
};