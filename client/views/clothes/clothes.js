
		
Template.Clothes.helpers({
	
	"clothes":function  () {
		return Clothes.find();
	}
})
/*Template.Clothes.onCreated = function () {
	console.log(this)
}*/

Template.Clothes.events({
	"click .subcategory":function  (event) {
			//debugger;
			event.preventDefault();
			var $link = $(event.currentTarget)
			var $categoryItem = $link.closest(".findCat")
			var categoryID = $categoryItem.attr("id")
			console.log($categoryItem)
			var subcategory = event.currentTarget.id
			Router.go("clothesCategory",{subcategory:subcategory, category:categoryID})
	}
})

