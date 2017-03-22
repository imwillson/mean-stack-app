// var port = 1337;
// var express = require('./config/express');
// //console.log(express);

// var app = express();

// app.listen(port);
// module.exports = app; //what is module.exports? 
// //is it so that all the functins of the module can be used here? 
// console.log('Server running at http://localhost:' + port);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose(),
    app = express(),
    passport = passport();


app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);