Meteor.publish('isAdmin', function () {
	return Meteor.users.find(this.userId, {fields: {isAdmin: 1}})
});

Meteor.publish('watchList', function () {
	return Meteor.users.find(this.userId, {fields: {'profile.watchList': 1}})
});

Meteor.publish('myBag', function () {
	return Meteor.users.find(this.userId, {fields: {'profile.myBag': 1}})
});

Meteor.publish('allClothes', function () {
	return Clothes.find();
});

Meteor.publish('allImages', function () {
	return Images.find();
});


Meteor.publish('orders', function () {
	return OrderAddress.find();
});