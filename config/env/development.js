var port = 1337; 

//the environment config file is used to connect application uri variables 
//what are configuration files , for mongodb, u use it to connec tur database to ur app

module.exports = {

	//connects to the database and port
	port: port,
	db: 'mongodb://localhost/todos',

	//connects to the facebook login

	facebook: {
        clientID: '195020047662533',
        clientSecret: 'cda5d850d5f0971756283d473b24b904',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    }

};