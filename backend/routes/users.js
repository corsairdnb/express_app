var db = require('db'),
    Users = require('../models/user/index');

var express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    var users = new Users();
    res.render('userlist', {
        users: users.getList()
    });
});

module.exports = router;
