const Message = require('../controllers/message.controller');

module.exports = app => {
    app.post('/message/create', Message.createMessage);

    app.get('/message/getmessages/:roomid', Message.getAllFromRoom);

    app.delete('/message/deleteall', Message.deleteAllMessages);
}