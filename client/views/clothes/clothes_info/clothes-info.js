Template.clothesInfo.onCreated(function () {
	console.log(this.data)
})

Template.clothesInfo.helpers({
	imageByNumber:function(numb){
		var images = Images.find({
			_id:{$in :this.clothItem.imagesIds}
		})
		return images.map(function (img) {
			return img.url()
		})[numb]
	},
	sizeManFirst:function(){
		var subcategory=Template.instance().data.clothItem.subcategory;
		if (subcategory == "new-man" || subcategory == "jackets-man"){
			return true;
		}
	},
	sizeManSec:function(){
		var subcategory=Template.instance().data.clothItem.subcategory;
		if (subcategory == "" || subcategory == ""){
			return true;
		}
	},
	sizeManThird:function(){
		var subcategory=Template.instance().data.clothItem.subcategory;
		if (subcategory == "" || subcategory == ""){
			return true;
		}
	},
	sizeWomFirst:function(){
		var subcategory=Template.instance().data.clothItem.subcategory;
		if (subcategory == "" || subcategory == ""){
			return true;
		}
	},
	sizeWomSec:function(){
		var subcategory=Template.instance().data.clothItem.subcategory;
		if (subcategory == "" || subcategory == ""){
			return true;
		}
	},
	sizeWomThird:function(){
		var subcategory=Template.instance().data.clothItem.subcategory;
		if (subcategory == "" || subcategory == ""){
			return true;
		}
	}
});
Template.clothesInfo.events({
	"click #sizeInfo":function  (e,tmpl) {
		event.preventDefault();
		var clothID = tmpl.data.clothItem._id;
		console.log(clothID);
		var parentNode = $('body')[0];
		Blaze.renderWithData(Template.sizeInfo,tmpl.data,parentNode);
	},
	"click #addToBox":function  (e,tmpl) {
		//debugger
		e.preventDefault();
		var size = tmpl.$('.tabs').find('a.active').prop('id');
		console.log(size);
			var clothID = tmpl.data.clothItem._id;
			console.log(clothID);
			var user = Meteor.userId();
			Meteor.call('addToMyBag', clothID, size, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
            }
            });	
	},
	"click #wishList":function  (e,tmpl) {
			event.preventDefault();
			var clothID = tmpl.data.clothItem._id;
			var user = Meteor.userId();
			Meteor.call('addToWatchlist', clothID, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
                }
            });
			
	},
	"click #buy":function  (event, tmpl) {
		//debugger
		event.preventDefault();
		Router.go("addressInfo");
	}
})


 Template.clothesInfo.onRendered(function(){
	$(document).ready(function(){
    $('.materialboxed').materialbox();
  }),
	$(document).ready(function(){
    $('ul.tabs').tabs();
  });
})


