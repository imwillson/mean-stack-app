module.exports = require('./env/' + process.env.NODE_ENV+ '.js');


//This will let you load the correct db (and other variables that we'll define later) variable based on your environment 
//(be it a development or production) configuration file.

//this ./env/ links to the development.js