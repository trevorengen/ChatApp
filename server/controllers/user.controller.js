const User = require('../models/user.model');
const Room = require('../models/room.model');
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/user.model');
const bcrypt = require('bcrypt');
require('dotenv').config();

// LOGIN
module.exports.loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user === null) {
        return res.status(400).json('Email or password is incorrect.');
    };
    const passIsCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!passIsCorrect) {
        return res.status(400).json('Email or password is incorrect.')
    };

    const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.cookie('userToken', userToken, { httpOnly: true })
    res.cookie('userName', user.userName)
        .json({ user: user });
};

module.exports.isLoggedIn = (req, res) => {
    res.sendStatus(200);
}

// LOGOUT
module.exports.logoutUser = (req, res) => {
    res.clearCookie('userToken');
    res.clearCookie('userName');
    res.sendStatus(200);
};

// CREATE
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            res.cookie('userToken', userToken, { httpOnly: true })
            res.cookie('userName', user.userName)
                .json({ msg: 'Success' });
        })
        .catch(err => {
            res.status(400).json({ error: err });
        });
};

// RETRIEVE
module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.status(400).json({ error: err }));
};

module.exports.getOneUser = (req, res) => {
    User.findById({ _id: jwt.decode(req.params.id) })
        .then(user => res.json({ user: user }))
        .catch(err => res.status(401).json({ error: err }));
};

module.exports.getOneUserByName = (req, res) => {
    User.findOne({ userName: req.params.name })
        .then(user => res.json({ user: user }))
        .catch(err => res.status(400).json({ error: err }));
};

// UPDATE
module.exports.addRoomToUser = (req, res) => {
    User.find({ userName: req.body.userName })
        .then(user => {
            console.log(req.body);
            for (var i=0; i<user[0].rooms.length; i++) {     
                if (req.body.room.roomName.toLowerCase() === user[0].rooms[i].roomName.toLowerCase()) {
                    return res.status(400).json({ error: 'User already in room!' });
                }
            } 
            User.updateOne({ userName: req.body.userName }, { $push: { rooms: req.body.room} }, { new: true })
                .then(user => res.json({ user: user }))
                .catch(err => res.status(400).json({ error: err }));
            Room.updateOne({ _id: req.body.room._id }, { $push: { users: user } }, { new: true })
                .then(room => res.json({ room: room }))
                .catch(err => res.json({ error: err }));
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ error: err });
        });
};

module.exports.updateUserSocket = (req, res) => {
    User.updateOne({ userName: req.body.userName }, { currentSocket: req.body.socket }, { new: true })
        .then(user => {
            res.json({ user: user });
        })
        .catch(err => res.status(400).json({ error: err }));
};

// DELETE
module.exports.deleteAllUsers = (req, res) => {
    User.deleteMany({})
        .then(response => res.json({ response: response }))
        .catch(err => res.status(400).json({ error: err }));
};

module.exports.deleteOneUser = (req, res) => {
    User.deleteOne({ id: req.params.id })
        .then(response => res.json({ response: response }))
        .catch(err => res.status(400).json({ error: err }));
};