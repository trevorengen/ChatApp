const Message = require('../controllers/message.controller');

module.exports = app => {
    app.post('/message/create', Message.createMessage);

    // Bit of a hack but post is chosen here specifically because firefox is 
    // rarely returning a status 204 on get requests and not updating the 
    // chat room with messages. It causes a weird delay where messages come
    // through one by one. Using post forces it to update each time it seems.
    app.post('/message/getmessages/:roomid', Message.getAllFromRoom);

    app.delete('/message/deleteall', Message.deleteAllMessages);
}