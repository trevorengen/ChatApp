const Room = require('../controllers/room.controller');

module.exports = app => {
    app.post('/room/create', Room.createNewRoom);

};
