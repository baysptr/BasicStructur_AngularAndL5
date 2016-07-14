/**
* y Module
*
* Routes File
*/
angular.module('y')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'client/views/commons/home.html'
	});

}])