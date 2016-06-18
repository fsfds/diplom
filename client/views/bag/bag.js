Template.bag.helpers({
	bagImg:function(num){
		var images = Images.find({
			_id:{$in :this.imagesIds}
		})
		return images.map(function (img) {
			return img.url()
		})[num]
	},
	bagItems:function(){
		var user = Meteor.user();
		console.log(user);
		if(user && user.profile && user.profile.myBag){
			return user.profile.myBag.map(function (bagItemsId) {
				var cloth = Clothes.findOne(bagItemsId.clothID);
				var price = cloth.price;
				// console.log(bagItemsId);
				// console.log("qwe" , cloth);
				// console.log("price" , price);
				cloth.size = bagItemsId.size;
				return cloth;
			})
		}
	},
	bagSum:function(){
			var user = Meteor.user();
			var priceSum = 0;
			// var a = "23a";
			// var qwe = parseFloat(a);
			// console.log("qqq" , qwe);
			user.profile.myBag.map(function (bagItemsId) {
				var cloth = Clothes.findOne(bagItemsId.clothID);
				// var price = cloth.price;
				var price = parseFloat(cloth.price);
				console.log("price" , price);
				priceSum += price;
				console.log("price1" , priceSum);
			}),
			console.log("price2" , priceSum);
			return priceSum ;
	},
	bagItemsInside:function(){
		var a = Meteor.user().profile.myBag.length;
		// console.log("a", a)
		if (a != 0){
			// console.log("+") 
			return true;
		}else{
			// console.log("-") 
			return false;
		}
	}
})
Template.bag.events({
	"click #del":function  (event, tmpl) {
		//debugger
			var clothID = this._id;
			var size = this.size;
			var user = Meteor.userId();
			Meteor.call('dellFromMyBag', clothID, size, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
                }
                console.log("qwe" , result)
            });

	},
	"click img":function  (event, tmpl) {
		//debugger
		var clothID = this._id;
		console.log(clothID);
			Router.go("clothesInfo", {id: clothID});
	},
	"click #buy":function  (event, tmpl) {
		//debugger

		Router.go("addressInfo");
	}
	
})

