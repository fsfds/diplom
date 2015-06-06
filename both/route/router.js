/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
layoutTemplate: 'MasterLayout',
loadingTemplate: 'Loading',
notFoundTemplate: 'NotFound',
yieldTemplates: {
'TopMenu': {'to': 'TopMenu'}
}
});
/*
* Example:
* Router.route('/', {name: 'home'});
*/
Router.route(
'home',
{
	path: '/',
	name: 'home',
	template: 'Home'
}
);


Router.route(
'clothes',
{
	path: '/clothes/:category',
	name: 'clothes',
	template: 'Clothes',
	data:function  () {
		return this.params.category
	}

}
);