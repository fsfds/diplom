Template.ordersInfo.events({
	"click #order":function  (event, tmpl) {
		//debugger
		var ordInf = this._id;
		// console.log(ordInf);
		Router.go("ordersUserInfo", {id: ordInf});
	},
	"click #orderDone":function  (e, tmpl) {
		//debugger
			var orderID = this._id;
			console.log(orderID);
			Meteor.call('dellFromOrders', orderID, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
                }
            });
           	//Router.go("ordersInfo");
	}
});

Template.ordersInfo.helpers({
	orders: function () {
		return OrderAddress.find();
	}
})
