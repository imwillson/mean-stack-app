// var users = require('../../app/controllers/users.server.controller'); //coorection here

// module.exports = function(app) {
//     app.route('/users').post(users.create); //users = the controller variable
// };

var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    // app.route('/users').post(users.create).get(users.list);

    // app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);
    // // the colo means 
    // //express 
    // // this substring will be handled as a request parameter
    // //substring indicates the user id will be used first 
    // //app.param connects to the colon,
    // // usersByID then users.read

    // //put request is to update

    // app.param('userId', users.userByID);

    //added for flash

    app.route('/users').post(users.create).get(users.list);

    app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

    app.param('userId', users.userByID);

    app.route('/register')
        .get(users.renderRegister)
        .post(users.register);

    app.route('/login')
        .get(users.renderLogin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.get('/logout', users.logout);    
};