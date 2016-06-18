Template.Home.onRendered(function(){
 $(document).ready(function(){
      $('.slider').slider({
      	  full_width: true,
          interval: 5000,
          transition: 800,});
    });
})
Template.Home.events({
	"click #dresses":function  () {
			//debugger
			var category ="promo-woman";
			var subcategory="dresses-promo-woman";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #sport":function  () {
			var category ="promo-woman";
			var subcategory="sport-promo-woman";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #manShoes":function  () {
			var category ="promo-woman";
			var subcategory="shoes-promo-man";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #womShoes":function  () {
			var category ="promo-woman";
			var subcategory="shoes-promo-woman";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click .sliderPre":function  () {
			
			$('.slider').slider('prev');
	},
	"click .sliderNext":function  () {
			$('.slider').slider('next');
	},"click #new-man":function  () {
			event.preventDefault();
			var category ="man";
			var subcategory="new-man";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #shoes-man":function  () {
			var category ="shoes-man";
			var subcategory="shoes-shoes-man";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #shirts-man":function  () {
			var category ="man";
			var subcategory="shirts-man";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #jeans-man":function  () {
			var category ="man";
			var subcategory="jeans-man";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #shorts-man":function  () {
			var category ="man";
			var subcategory="shorts-man";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	},
	"click #tShirts-man":function  () {
			var category ="man";
			var subcategory="tShirts-man";
			Router.go("clothesCategory",{subcategory:subcategory, category:category})
	}

})