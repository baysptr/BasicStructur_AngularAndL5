angular.module('y.controllers')
.controller('homeCtrl', ['$scope', function($scope){
	$scope.color = 'blue';
	console.log('color changed to blue');
}]);