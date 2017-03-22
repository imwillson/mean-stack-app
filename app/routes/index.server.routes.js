module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render); 
    //whenver it receives a get functin, index.render
    // itcalls the controller's render
}; 

// module.exports = function(app) {
//     var index = require('../controllers/index.server.controller');
//     app.get('/', index.render);
// 

exports.render = function(req, res) {
    res.render('index', {
        title: 'MEAN MVC',
        user: req.user ? req.user.username : ''
    });
};