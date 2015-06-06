Template.TopMenu.events({
	"click #link-man":function  () {
			Router.go("/clothes/man")
	},
	"click #link-woman":function  () {
			Router.go("/clothes/woman")
	},
	"click #link-kids":function  () {
			Router.go("/clothes/kids")
	}
})