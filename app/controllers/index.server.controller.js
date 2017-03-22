// exports.render = function(req, res) {
//     res.render('index', { //renders the view locally, sends the ejs file locally
//         title: 'Howdy World'
//     })
// };

exports.render = function(req, res) {
    res.render('index', {
        title: 'MEAN MVC',
        user: req.user ? req.user.username : ''
    });
};


