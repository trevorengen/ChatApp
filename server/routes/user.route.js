const User = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/user/register', User.createNewUser);
    app.post('/api/user/login', User.loginUser);

    app.get('/api/user/name/:name', User.getOneUserByName);
    app.get('/api/user', authenticate, User.getAllUsers);
    app.get('/api/user/isloggedin', authenticate, User.isLoggedIn);
    app.get('/api/user/logout', authenticate, User.logoutUser);
    app.get('/api/user/:id', authenticate, User.getOneUser);
    

    app.put('/api/user/addroom/:name', authenticate, User.addRoomToUser);

    app.delete('/api/user/deleteall', authenticate, User.deleteAllUsers)
    app.delete('/api/user/delete/:id', authenticate, User.deleteOneUser)
}