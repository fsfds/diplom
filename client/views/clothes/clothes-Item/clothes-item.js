Template.ClothesItem.helpers({
	images:function(num){
		var images = Images.find({
			_id:{$in :this.imagesIds}
		})
		return images.map(function (img) {
			return img.url()
		})[num]
	},
	isAdmin:function (argument) {
		var user = Meteor.user();
		return user ? user.isAdmin : false;
	}
})


Template.ClothesItem.events({
	"click #edit":function  (e,tmpl) {
			e.preventDefault();
			var id= tmpl.data._id;
			console.log(id);
			Router.go("edit",{id:id});
	},
	"click img":function  (e, tmpl) {
		var clothID = tmpl.data._id;
		console.log(clothID);
			Router.go("clothesInfo", {id: clothID});
	},
	"click #wishList":function  (e,tmpl) {
			var clothID = tmpl.data._id;
			var user = Meteor.userId();
			Meteor.call('addToWatchlist', clothID, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
                }
            });
	},
	"click #clothDel":function  (e, tmpl) {
		//debugger
			var clothID = this._id;
			console.log(clothID);
			Meteor.call('dellFromClothes', clothID, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
                }
            });
	}
})