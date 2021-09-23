const Room = require('../controllers/room.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/room/name/:name', Room.getRoomByName);
    app.get('/room/dmroom/:user1/:user2', Room.getDmByUsers);
    app.get('/room/:id', Room.getRoomById);

    app.post('/room/create', Room.createNewRoom);

    app.put('/room/adduser', authenticate, Room.updateRoomUsers);

    app.delete('/room/deleteall', Room.deleteAllRooms);
};
