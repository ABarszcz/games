var express = require('express');
var router = express.Router();

//reference the Account model
var account = require('../models/account');

//authization
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}

//GET users listing.
router.get('/', isLoggedIn, function(req, res, next) {
    //use Account model to run a query
    account.find(function(err, users) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            //load the users view
            res.render('users', {
                title: 'Users',
                users: users,
                user: req.user
            });
        }
    });
});

module.exports = router;
