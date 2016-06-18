Template.ordersUserInfo.helpers({
	qwe:function  () {
		var clothItem = Clothes.findOne(this.clothID);
		if (!clothItem){
			return null;
		}
		var image = Images.findOne(clothItem.imagesIds[0]);
		return image ? image.url() : null;
	}
	
})

Template.ordersUserInfo.events({
	"click #orderDone":function  (e, tmpl) {
		debugger
			var qwe = OrderAddress.findOne();
			var clothID = qwe._id;
			var user = Meteor.userId();
			Meteor.call('dellFromOrders', clothID, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
                }
            });
           	Router.go("ordersInfo");
	}
	
})