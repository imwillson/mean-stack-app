var port = 1337; 

//the environment config file is used to connect application uri variables 
//what are configuration files , for mongodb, u use it to connec tur database to ur app


//The proper way to store application variables is to use your environment configuration file. In the config folder create
// an env folder and inside it create a development.js  
module.exports = {

	//connects to the database and port
	port: port,
	db: 'mongodb://localhost/todos',

	//connects to the facebook login

	facebook: {
        clientID: '195020047662533',
        clientSecret: 'cda5d850d5f0971756283d473b24b904',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    },

    twitter: {
    	clientID: 'FTp2pvOJr26VcBkW2KYh4BepZ',
    	clientSecret: 'tH2WEnauKXwyhfMBj1vGTH81W2iC7vr9h0zXCdZ3Z2O7WFGoA2',
    	callbackURL: 'http://localhost:'+ port +'/oauth/twitter/callback'

    }

};