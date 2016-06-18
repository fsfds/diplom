Template.loginModal.onCreated(function() {
    this.removeTemplate = function (view) {
    setTimeout(function () {
        Blaze.remove(view);
    }, 500);
};
});

Template.loginModal.onRendered(function () {
this.$('#modal1').openModal();
    var self = this;
    $('.lean-overlay').on('click', function () {
        self.removeTemplate(self.view);
    });

});

Template.loginModal.onDestroyed(function () {
    $('.lean-overlay').remove();
});

Template.loginModal.events({
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

