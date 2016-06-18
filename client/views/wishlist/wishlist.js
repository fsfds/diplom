Template.wishlist.helpers({
	wishImg:function(num){
		var images = Images.find({
			_id:{$in :this.imagesIds}
		})
		return images.map(function (img) {
			return img.url()
		})[num]
	},
	wishlistItems:function(){
		var user = Meteor.user();
		console.log(user);
		if(user && user.profile && user.profile.watchList){
			return user.profile.watchList.map(function (wishlistItemsId) {
				return Clothes.findOne(wishlistItemsId)
			})
		}
	}
})
Template.wishlist.events({
	"click #del":function  (e, tmpl) {
		//debugger
			var clothID = this._id;
			var user = Meteor.userId();
			Meteor.call('dellFromWatchlist', clothID, function (error, result) {
                if (error) {
                    console.log(error);
                }
            });
	},
	"click img":function  (event, tmpl) {
		//debugger
		var clothID = this._id;
		console.log(clothID);
			Router.go("clothesInfo", {id: clothID});
	}
	
})