/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/

Router.waitOn(function (argument) {
	return [this.subscribe('isAdmin'),
            this.subscribe('watchList'),
            this.subscribe('myBag')]
            
});

Router.configure({
	layoutTemplate: 'MasterLayout',
	yieldTemplates: {
		'TopMenu': {'to': 'TopMenu'},
		'Footer': {'to': 'Footer'}
	}
});


Router.route('home', {
	path: '/',
	name: 'home',
	template: 'Home'
});


Router.route('clothes',{
	path: '/clothes',
	template: 'Clothes',
    waitOn:function(){
    	this.subscribe("clothes");
    }
});

Router.route('clothesCategory',{
	 path: '/clothes/:category/:subcategory',
	template: 'Clothes',
	waitOn: function (){
		return this.subscribe('clothescategory', this.params.category, this.params.subcategory);
	},
	data:function  () {
		return {category: this.params.category, subcategory: this.params.subcategory}
	}
});

Router.route('bag', {
	path: '/bag',
	template: 'bag',
	waitOn:function(){
    	return this.subscribe("clothesSec");
    }
});

Router.route('wishlist', {
	path: '/wishlist',
	template: 'wishlist',
	waitOn:function(){
    	return this.subscribe("clothesSec");

    }
});


Router.route('addressInfo', {
	path: '/addressInfo',
	template: 'addressInfo'
});

Router.route('companyInfo', {
	path: '/companyInfo',
	template: 'companyInfo'
});

Router.route('ordersInfo', {
	path: '/ordersInfo',
	template: 'ordersInfo',
	waitOn:function(){
    	return this.subscribe("orders");

    }
});
Router.route('ordersUserInfo', {
	path: '/ordersUserInfo/:id',
	template: 'ordersUserInfo',
	waitOn:function(){
    	return [this.subscribe("orders"),
    			this.subscribe("clothesSec")];
    },
    data: function  () {
		return  { 
			order: OrderAddress.findOne(this.params.id),
			clothItem: Clothes.find()
		}
		
	}

});

Router.route('createEdit', {
	path: '/createEdit',
	template: 'createEdit',
	data: function  () {
		return {
			
		}
	}
});

Router.route('edit', {
	path: '/createEdit/:id',
	template: 'createEdit',
	waitOn: function (){
    	return this.subscribe("clothes", {_id: this.params.id});
    },
	data: function  () {
		return {
			clothItem: Clothes.findOne(this.params.id)
		}
	}

});

Router.route('clothesInfo', {
	path: '/clothesInfo/:id',	
	template: 'clothesInfo',
	waitOn: function (){
    	return this.subscribe("clothes", {_id: this.params.id});
    },
	data: function  () {
		return {
			clothItem: Clothes.findOne(this.params.id)
		}
	}

});

