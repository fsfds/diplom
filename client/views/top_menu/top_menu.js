

// Template.TopMenu.onRendered(function(){
// 	$('.modal-trigger').leanModal();
// })




Template.TopMenu.events({

	"click .subcategory":function  (event) {
        //debugger;
        event.preventDefault();
		var $link = $(event.currentTarget)
		var $categoryItem = $link.closest(".findCat")
		var categoryID = $categoryItem.attr("id")
		console.log($categoryItem)
		var subcategory = event.currentTarget.id
			Router.go("clothesCategory",{subcategory:subcategory, category:categoryID})
	},
	"click #logo-img":function  () {
			event.preventDefault();
			Router.go("/")
	},
	"click #createEdit":function  () {
			Router.go("createEdit")
	},
	"click #bag":function  () {
			Router.go("bag")
	},
	"click #company":function  () {
			Router.go("companyInfo")
	},
	"click #wishlist":function  () {
			Router.go("wishlist")
	},
	"click #ordersInfo":function  () {
			Router.go("ordersInfo")
	},
	"click #createLook":function  () {
			Router.go("createLook")
	},
	"click #login":function  () {
		var parentNode = $('body')[0];
		Blaze.render(Template.loginModal, parentNode);
	}
	
})

Template.TopMenu.helpers({
	isAdmin:function (argument) {
		var user = Meteor.user();
		return user ? user.isAdmin : false;
	}
})



Template.TopMenu.onRendered(function(){
	 $('.dropdown-button').dropdown({
	 inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }),
    $('.tooltipped').tooltip({delay: 50});

})



 