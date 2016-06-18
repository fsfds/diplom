
Meteor.publishComposite('clothes', function (params) {
	return {
    find: function() {
       return Clothes.find(params);
    },
    children: [
        {
            find: function(clotheItem) {
            	return Images.find({_id: {$in: clotheItem.imagesIds}});
            }
        }
        ]
	}
});


Meteor.publishComposite('clothesSec', function () {
  return {
    find: function() {
       return Clothes.find();
    },
    children: [
        {
            find: function(clotheItem) {
              return Images.find({_id: {$in: clotheItem.imagesIds}});
            }
        }
        ]
  }
});


Meteor.publishComposite('clothescategory', function (category, subcategory) {
  return {
    find: function() {
       return Clothes.find({category: category, subcategory: subcategory});
    },
    children: [
        {
            find: function(clotheItem) {
              return Images.find({_id: {$in: clotheItem.imagesIds}});
            }
        }
        ]
  }
});

Images.allow({
  'download': function () {
    return true;
  }
});
