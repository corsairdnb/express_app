module.exports = function($, _, Backbone, db){

    var Users = Backbone.Model.extend({
        defaults: (function(){
            var obj = [];
            _.each(db.getAll(), function(e){
                obj.push(e);
            });
            return obj;
        }())
    });

    return new Users();

};