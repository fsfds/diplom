// Template.createLook.onRendered(function() {
//     this.$('#category').material_select();
//     this.$('#subcategory').material_select();
//     var self = this;
//     this.autorun(function(){
//         self.category1.get();
//         Tracker.afterFlush(function(){     
//             self.$('#subcategory').material_select('update');
//         });
//     });
// })



// Template.createLook.helpers({

// 'mainCategory':function(){
//         return Template.instance().category1.get();
//     },
//     'allCategories':function(){
//         return [
//                 {
//                     id:"man",
//                     label:"Man"
//                 },
//                 {
//                     id:"woman",
//                     label:"Woman"
//                 }
//         ]

//     },
//     'allSubcategories':function(){
//         var allSubcategories = [
//                 {
//                     id:"new-man",
//                     label:"New",
//                     relatedCategory:"man"
//                 },                     
//                 {
//                     id:"new-woman",
//                     label:"New",
//                     relatedCategory:"woman"
//                 }
//                 ]
//             }
// })
// Template.createLook.events({

//     'change #category':function(event,tmpl){
//          var subcatelement =tmpl.$("#category").val();
//          console.log(subcatelement)
//          tmpl.category1.set(subcatelement)
//     }
// });