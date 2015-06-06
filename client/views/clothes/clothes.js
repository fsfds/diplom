var clothes=[];
		clothes.push({
			category:"qwe",
			name:"eaqwe",
			price:10,
			img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWAse1C6NpAkCWG44KUz_JScd1KRBCax4Qeh7blCjp9ZXsV3lMBMyMzpU"
		})
		clothes.push({
			category:"man",
			name:"converse",
			price:10,
			img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWAse1C6NpAkCWG44KUz_JScd1KRBCax4Qeh7blCjp9ZXsV3lMBMyMzpU"
		})
		clothes.push({
			category:"man",
			name:"converse",
			price:10,
			img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWAse1C6NpAkCWG44KUz_JScd1KRBCax4Qeh7blCjp9ZXsV3lMBMyMzpU"
		})
		clothes.push({
			category:"man",
			name:"converse",
			price:10,
			img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWAse1C6NpAkCWG44KUz_JScd1KRBCax4Qeh7blCjp9ZXsV3lMBMyMzpU"
		})
Template.Clothes.helpers({
	"clothes":function  () {
		return clothes;
	}


})
Template.Clothes.created = function () {
	console.log(this)
}