var express = require('express'),
    router = express.Router(),
    menu = require('../../common/menu'),
    //db = require('db'),
    Users = require('../models/user/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      page: {
        title: 'Express'
      },
      menu: menu
  });
});

/* GET users listing. */
router.get('/users', function(req, res) {
    var users = new Users();
    res.render('userlist', {
        page: {
            title: 'User list'
        },
        users: users.getList(),
        menu: menu
    });
});

module.exports = router;