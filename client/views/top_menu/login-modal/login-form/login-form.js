Template.loginForm.events({  
  'click #signup': function(event, tmpl) {
    var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      confirm: $('#confim-password').val(),
      profile: {
        eMail: $('#eMail').val(),
        watchList:[],
        myBag:[]
      }
    };// sAlert.error("Please specify a project name."); error.mesage
    Accounts.createUser(user, function (error) {
        //if(error) alert(error);
        if(error) {sAlert.error(error.reason, {timeout: 10000}); }
      });
      Router.go("/");
  },
    'click #login': function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
      //if(error) alert(error);
      if(error) {sAlert.error(error.reason, {timeout: 10000}); }
    });
    Router.go("/");
  },
  'click #logout': function() {  
    Meteor.logout();
    Router.go("/");
  },
  'input #signup-password': function(event, tmpl) { 
      var qwe =  $('#signup-password').val();
      console.log(qwe);
      tmpl.qwe1.set(qwe)
  }
});

Template.loginForm.onCreated(function () {
  this.qwe1 = new ReactiveVar("");
})
Template.loginForm.helpers({
  qq:function(){
    var qwe = Template.instance().qwe1.get();
    console.log("qq", qwe);
      return qwe;
    }
})



// Template.loginForm.events({  /
// //tmpl.$('#').input(function() {

// })
//   'click #signup-username': function() {  
//       var theEvent = evt || window.event;
//       var key = theEvent.keyCode || theEvent.which;
//       key = String.fromCharCode( key );
//       var regex = /[0-9]|\./;
//       if( !regex.test(key) ) {
//         theEvent.returnValue = false;
//         if(theEvent.preventDefault) theEvent.preventDefault();
//       }
//   }
// });


