
//  Template.addressInfo.onRendered(function() {
//     this.$('#sex').material_select();  
// })
Template.addressInfo.events({
	'click #buy': function(event, tmpl) {
	        //debugger;
	        event.preventDefault();
	        var lastName = tmpl.$('#lastName').val();
	        var firstName = tmpl.$('#firstName').val();
	        var phone = tmpl.$('#phone').val();
	        var street = tmpl.$('#street').val();
	        var zip = tmpl.$('#zip').val();
	        var city = tmpl.$('#city').val();
	        var country = tmpl.$('#country').val();
	        var delivery = tmpl.$('#delivery').val();
	        var userInf = {
	        	lastName : lastName,
	        	firstName : firstName,
	        	phone : phone,
	        	street : street,
	        	zip : zip,
	        	city : city,
	        	country : country,
	        	delivery : delivery
	        }

	        Meteor.call('userInfo', userInf,  function (err, res) {
	            if (err) {
	                 if(error) {sAlert.error(error.reason, {timeout: 10000}); }
	            } else {
	                console.log('res',res);
	                
	            }
	        })
	        
	        Router.go("/")
	    },
	    'click .contactInf': function() {
	    	event.preventDefault();
 				Router.go("companyInfo")
	    }
});

Template.addressInfo.onRendered(function() {
    this.$('#delivery').material_select();
})
