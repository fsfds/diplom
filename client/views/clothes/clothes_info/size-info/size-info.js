Template.sizeInfo.onCreated(function() {
    this.removeTemplate = function (view) {
    setTimeout(function () {
        Blaze.remove(view);
    }, 500);
};
});


Template.sizeInfo.onRendered(function () {
this.$('#modal1').openModal();
    var self = this;
    $('.lean-overlay').on('click', function () {
        self.removeTemplate(self.view);
    });

});

Template.sizeInfo.onDestroyed(function () {
    $('.lean-overlay').remove();
});

Template.sizeInfo.events({
    'click .confirm': function (e, template) {
        e.preventDefault();
        if (template.data.onConfirm) {
            template.data.onConfirm();
        }
        template.removeTemplate(template.view);
    },
    'click .cancel': function (e, template) {
        e.preventDefault();
        if (template.data.onCancel) {
            template.data.onCancel();
        }
        template.removeTemplate(template.view);
    }

});
Template.sizeInfo.helpers({
    man:function(){
        var category=Template.instance().data.clothItem.category;
        if (category == "man" || category == "accessories-man"|| category == "shoes-man"){
            return true;
        }
    },
    woman:function(){
        var category=Template.instance().data.clothItem.category;
        if (category == "woman" || category == "accessories-woman"|| category == "shoes-woman"){
            return true;
        }
    }
});

