// init

var Backbone = require('backbone'),
    $ = require('jquery-browserify'),
    _ = require('underscore');

Backbone.$ = $;

// app

var db = require('db'),
    usersModel = require('./models/users')($, _, Backbone, db),
    userView = require('./views/user')($, _, Backbone, usersModel);

var Workspace = Backbone.Router.extend({
    routes: {
        "help": "help",    // #help
        "users": "users",    // #help
        "search/:query": "search",  // #search/kiwis
        "search/:query/p:page": "search"   // #search/kiwis/p7
    },

    users: function() {

    }
});

userView.render();