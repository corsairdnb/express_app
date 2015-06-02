module.exports = function($, _, Backbone, usersModel) {

    var User = Backbone.View.extend({
        model: usersModel,
        el: '.users',
        template: _.template($("#view-user").html()),
        renderUsers: function(){
            var html = "",
                template = this.template;
            _.each(this.model.attributes, function(e){
                html += template(e);
            });
            return html;
        },
        render: function () {
            this.$el.html(this.renderUsers());
        }
    });

    return new User();

};