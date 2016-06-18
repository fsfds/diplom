Template.createEdit.onCreated(function() {
    var self = this;
    this.autorun(function(){
        var images = Template.currentData().clothItem ? self.data.clothItem.imagesIds.map(function(id){
        var image = Images.findOne(id);
        return image ? image.url(): "";
        }):[];
        self.imagesBase64 = new ReactiveVar(images);
    })
    var category = this.data.clothItem ? this.data.clothItem.category : "" ;
    this.category1 = new ReactiveVar(category);
})

Template.createEdit.onRendered(function() {
    this.$('#category').material_select();
    this.$('#subcategory').material_select();
    var self = this;
    this.autorun(function(){
        self.category1.get();
        Tracker.afterFlush(function(){     
            self.$('#subcategory').material_select('update');
        });
    });
})



Template.createEdit.helpers({
    'imageByNumber': function (number) {
    	return Template.instance().imagesBase64.get()[number];
    },
    'mainCategory':function(){
        return Template.instance().category1.get();
    },
    'allCategories':function(){
        return [
                {
                    id:"man",
                    label:"Man"
                },
                {
                    id:"woman",
                    label:"Woman"
                },
                {
                    id:"accessories-woman",
                    label:"Accessories woman"
                },
                {
                    id:"accessories-man",
                    label:"Accessories man"
                },
                {
                    id:"shoes-woman",
                    label:"Shoes woman"
                },
                {
                    id:"shoes-man",
                    label:"Shoes man"
                },
                {
                    id:"promo-woman",
                    label:"Promo woman"
                },
                {
                    id:"promo-man",
                    label:"Promo man"
                }
        ]
    },
    'allSubcategories':function(){
        var allSubcategories = [
                {
                    id:"new-man",
                    label:"New",
                    relatedCategory:"man"
                },
                {
                    id:"jackets-man",
                    label:"Jackets",
                    relatedCategory:"man"
                },
                {
                    id:"coats-man",
                    label:"Coats",
                    relatedCategory:"man"
                },
                {
                    id:"bomberJackets-man",
                    label:"Bomber Jackets",
                    relatedCategory:"man"
                },
                {
                    id:"jeans-man",
                    label:"Jeans",
                    relatedCategory:"man"
                },
                {
                    id:"tShirts-man",
                    label:"T-Shirts",
                    relatedCategory:"man"
                },
                {
                    id:"sweatshirts-man",
                    label:"Sweatshirts",
                    relatedCategory:"man"
                },
                {
                    id:"trousers-man",
                    label:"Trousers",
                    relatedCategory:"man"
                },
                {
                    id:"joggers-man",
                    label:"Joggers",
                    relatedCategory:"man"
                },
                {
                    id:"shirts-man",
                    label:"Shirts",
                    relatedCategory:"man"
                },
                {
                    id:"swimwear-man",
                    label:"Swimwear",
                    relatedCategory:"man"
                },
                {
                    id:"knitwear-man",
                    label:"Knitwear",
                    relatedCategory:"man"
                },
                {
                    id:"accessories-man",
                    label:"Accessories",
                    relatedCategory:"man"
                },                      
                {
                    id:"new-woman",
                    label:"New",
                    relatedCategory:"woman"
                },
                 {
                    id:"bomberJackets-woman",
                    label:"Bomber Jackets",
                    relatedCategory:"woman"
                },
                 {
                    id:"jackets-woman",
                    label:"Jackets",
                    relatedCategory:"woman"
                },
                 {
                    id:"blazers-woman",
                    label:" Blazers",
                    relatedCategory:"woman"
                },
                 {
                    id:"dresses-woman",
                    label:"Dresses",
                    relatedCategory:"woman"
                },
                 {
                    id:"jumpsuits-woman",
                    label:"Jumpsuits",
                    relatedCategory:"woman"
                },
                 {
                    id:"jeans-woman",
                    label:"Jeans",
                    relatedCategory:"woman"
                },
                 {
                    id:"trousers-woman",
                    label:"Trousers",
                    relatedCategory:"woman"
                },
                 {
                    id:"tShirts-woman",
                    label:"T-Shirts",
                    relatedCategory:"woman"
                },
                 {
                    id:"tops-woman",
                    label:"Tops",
                    relatedCategory:"woman"
                },
                 {
                    id:"bodysuits-woman",
                    label:"Bodysuits",
                    relatedCategory:"woman"
                },
                 {
                    id:"shirts-woman",
                    label:"Shirts",
                    relatedCategory:"woman"
                },
                 {
                    id:"knitwear-woman",
                    label:"Knitwear",
                    relatedCategory:"woman"
                },
                 {
                    id:"sweatshirts-woman",
                    label:"Sweatshirts",
                    relatedCategory:"woman"
                },
                 {
                    id:"skirts-woman",
                    label:"Skirts",
                    relatedCategory:"woman"
                },
                 {
                    id:"shorts-woman",
                    label:"Shorts",
                    relatedCategory:"woman"
                },
                 {
                    id:"swimwear-woman",
                    label:"Swimwear",
                    relatedCategory:"woman"
                },
                 {
                    id:"shoes-woman",
                    label:"Shoes",
                    relatedCategory:"woman"
                },
                {
                    id:"bags-accessories-woman",
                    label:"Bags",
                    relatedCategory:"accessories-woman"
                },
                {
                    id:"wallets-accessories-woman",
                    label:"Wallets",
                    relatedCategory:"accessories-woman"
                },
                {
                    id:"jewellery-accessories-woman",
                    label:"Jewellery",
                    relatedCategory:"accessories-woman"
                },
                {
                    id:"watches-accessories-woman",
                    label:"Watches",
                    relatedCategory:"accessories-woman"
                },
                {
                    id:"belts-accessories-woman",
                    label:"Belts",
                    relatedCategory:"accessories-woman"
                },
                {
                    id:"glasses-accessories-woman",
                    label:"Glasses",
                    relatedCategory:"accessories-woman"
                },
                {
                    id:"patches-accessories-woman",
                    label:"Patches",
                    relatedCategory:"accessories-woman"
                },{
                    id:"hair-accessories-woman",
                    label:"Hair accessories",
                    relatedCategory:"accessories-woman"
                },
                {
                    id:"watches-accessories-man",
                    label:"Watches",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"backpacks-accessories-man",
                    label:"Backpacks",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"wallets-accessories-man",
                    label:"Wallets",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"caps-accessories-man",
                    label:"Caps & beanies",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"belts-accessories-man",
                    label:"Belts",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"glasses-accessories-man",
                    label:"Glasses",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"socks-accessories-man",
                    label:"Socks",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"underwear-accessories-man",
                    label:"Underwear",
                    relatedCategory:"accessories-man"
                },
                {
                    id:"trainers-shoes-woman",
                    label:"Trainers",
                    relatedCategory:"shoes-woman"
                },
                {
                    id:"heels-shoes-woman",
                    label:"Heels",
                    relatedCategory:"shoes-woman"
                },
                {
                    id:"heeledSandals-shoes-woman",
                    label:"Heeled Sandals",
                    relatedCategory:"shoes-woman"
                },
                {
                    id:"flatSandals-shoes-woman",
                    label:"Flat Sandals",
                    relatedCategory:"shoes-woman"
                },
                {
                    id:"wedges-shoes-woman",
                    label:"Wedges",
                    relatedCategory:"shoes-woman"
                },
                {
                    id:"flats-shoes-woman",
                    label:"Flats",
                    relatedCategory:"shoes-woman"
                },
                {
                    id:"boots-shoes-woman",
                    label:"Boots & Ankle boots",
                    relatedCategory:"shoes-woman"
                },
                {
                    id:"trainers-shoes-man",
                    label:"Trainers",
                    relatedCategory:"shoes-man"
                },
                {
                    id:"boots-shoes-man",
                    label:"Boots & Ankle boots",
                    relatedCategory:"shoes-man"
                },
                {
                    id:"shoes-shoes-man",
                    label:"Shoes",
                    relatedCategory:"shoes-man"
                },
                {
                    id:"sandals-shoes-man",
                    label:"Sandals",
                    relatedCategory:"shoes-man"
                },
                {
                    id:"accessories-promo-woman",
                    label:"-30% on accessories",
                    relatedCategory:"promo-woman"
                },
                {
                    id:"sport-promo-woman",
                    label:"-30% on Sport Start Moving",
                    relatedCategory:"promo-woman"
                },
                {
                    id:"shoes-promo-woman",
                    label:"-30% on shoes",
                    relatedCategory:"promo-woman"
                },
                {
                    id:"dresses-promo-woman",
                    label:"-30% on dresses",
                    relatedCategory:"promo-woman"
                },
                {
                    id:"shoes-promo-man",
                    label:"-30% on shoes",
                    relatedCategory:"promo-man"
                }
        ];
        var currentCategory = Template.instance().category1.get();
        return _.filter(allSubcategories, function(subcategory){
            return subcategory.relatedCategory == currentCategory;
        });

    }
    
})

Template.createEdit.events({

    'change #category':function(event,tmpl){
         var subcatelement =tmpl.$("#category").val();
         console.log(subcatelement)
         tmpl.category1.set(subcatelement)
    },
    'change #image-input': function(event, tmpl) {
    	var files = event.target.files;

    	for(var i = 0; i < files.length; i++) {
    		var reader = new FileReader();
        	reader.onload = function(event) {
	            var currentImages = tmpl.imagesBase64.get() || [];
	            currentImages.push(event.target.result);
	            tmpl.imagesBase64.set(currentImages);
        	};
        	reader.readAsDataURL(files[i])
    	}
    },

    'submit #clothes-form': function(event, tmpl) {
        //debugger;
        event.preventDefault();
        // console.log(tmpl.data.clothItem._id);
        
        var name = tmpl.$('#name').val();
        var price = tmpl.$('#price').val();
        var sex = tmpl.$('#sex').val();
        var subcategory = tmpl.$('#subcategory').val();
        var category = tmpl.$('#category').val();
        var clothes = {
            name: name,
            price: price,
            sex: sex,
            subcategory: subcategory,
            category: category
        };
        var imagesBase64 = tmpl.imagesBase64.get();

        if(tmpl.data.clothItem && tmpl.data.clothItem._id){
            var clothId = tmpl.data.clothItem._id;
            Meteor.call('editClothes', clothes,  clothId, function (err, res) {
                if (err) {
                   sAlert.error(error.reason, {timeout: 10000}); 
                } else {
                    console.log(res);
                    Router.go('clothesInfo', {id: res})
                }
            })
        }else{
            Meteor.call('createClothes', clothes, imagesBase64, function (err, res) {
                if (err) {
                   sAlert.error(error.reason, {timeout: 10000}); 
                } else {
                    console.log(res);
                    Router.go('clothesInfo', {id: res})
                }
            })
        }
        },
        "click #del":function  (e, tmpl) {
        //debugger
            var clothID = tmpl.data.clothItem._id;
            console.log(clothID);
            Meteor.call('dellFromClothes', clothID, function (error, result) {
                if (error) {
                     if(error) {sAlert.error(error.reason, {timeout: 10000}); }
                }
            });
            var category = tmpl.data.clothItem.category;
            var subcategory = tmpl.data.clothItem.subcategory;
            // console.log(category);
            // console.log(subcategory);
            Router.go('clothesCategory', {category: category, subcategory:subcategory})
        }
});