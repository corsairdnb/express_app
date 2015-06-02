var db = require('db');

var User = function(){
    var data = db.getAll();
    this.getList = function(){
        return data;
    };
};

module.exports = User;