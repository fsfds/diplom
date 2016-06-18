Meteor.methods({
	createClothes: function (clothesObject, imagesBase64) {

		console.log(clothesObject);
		console.log(imagesBase64);
		var imagesIds = [];
		imagesBase64.forEach(function (base64) {
			var image=Images.insert(base64);
			if (image && image._id) {
				imagesIds.push(image._id);
			}
		});

		clothesObject.imagesIds = imagesIds;
		console.log(clothesObject);
		
		var id = Clothes.insert(clothesObject);
		return id;
	},
	editClothes: function (clothesObject, clothId) {
		Clothes.update({_id:clothId},{$set: clothesObject});
		return clothId;
	},
	// userInfo:function (userInf) {
		
	// }
	userInfo:function(userInf){
		var user = Meteor.user();
		console.log("qwe" , user.profile.myBag);
		var order = _.extend(userInf, {
			items: user.profile.myBag,
			userOrdered: user._id
		});
		var id = OrderAddress.insert(order);
		console.log('idididid',id);
		return id;
	},
	addToWatchlist:function(clothID){
		var user = Meteor.user();
		Meteor.users.update(user._id,{$addToSet: {"profile.watchList": clothID}});
	},
	dellFromWatchlist:function(clothID){
		var user = Meteor.user();
		Meteor.users.update(user._id,{$pull: {"profile.watchList": clothID}});
	},
	addToMyBag:function(clothID,size){
		var user = Meteor.user();
		Meteor.users.update(user._id,{$addToSet: {"profile.myBag": {clothID:clothID, size:size}}});
	},
	dellFromMyBag:function(clothID, size){
		var user = Meteor.user();
		console.log(user);
		console.log(clothID);
		console.log(size);
		Meteor.users.update(user._id,{$pull: {"profile.myBag": { clothID: clothID, size: size } }});
	},
	dellFromOrders:function(orderID){
		console.log(orderID);
		OrderAddress.remove(orderID);
	},
	dellFromClothes:function(clothID){
		console.log(clothID);
		var user = Meteor.user();
		Meteor.users.update(user._id,{$pull: {"profile.watchList": clothID}});
		Meteor.users.update(user._id,{$pull: {"profile.myBag": { clothID: clothID} }});
		Clothes.remove(clothID);
	}

})
