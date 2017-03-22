var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    flash = require('connect-flash'), //used for storing temporary messages 
    session = require('express-session'); // expxression sessions viewing the flash

module.exports = function() {
    var app = express();

    
    app.use(flash());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'OurSuperSecretCookieSecret'
    }));


    app.use(bodyParser.urlencoded({
        extended: true //body parser geoes thru url link
    }));

    app.use(bodyParser.json()); //body parser uses jso 

    app.use(passport.initialize());
    app.use(passport.session());


    app.set('views', './app/views'); //this is how it knows where to look for views
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};

// v2.0
// var express = require('express');
// module.exports = function() { // how to call module? filename
//     var app = express();
//     app.set('views', './app/views'); //sets view to the proper directory
// 	app.set('view engine', 'ejs'); // sets the template to ejs EXTENSIOn
//     require('../app/routes/index.server.routes.js')(app); 
//     //app requires the routing file
//     require('../app/routes/users.server.routes.js')(app); // added to route users interaction
//     app.use(express.static('./public'));
//     return app;
// };



//v1.0
// var express = require('express');
// module.exports = function() {
//     var app = express();
//     require('../app/routes/index.server.routes.js')(app);
//     return app;
// };ly 