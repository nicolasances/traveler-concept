var travelerModule = angular.module("traveler", [ "ngRoute", "ngMaterial", "homeModule"])
.controller("travelerController", function($scope, $route, $location, $mdMedia, $mdSidenav, $rootScope) {
	
	$scope.go = function(path) {
		$location.path(path);
	};

	$scope.toggleNavbar = function(id) {
		$mdSidenav(id).toggle();
	}

	$scope.$watch(function() {
		return $mdMedia('lg');
	}, function(big) {
		$scope.bigScreen = big;
	});
	$scope.screenIsSmall = $mdMedia('sm');
})
.config(function($httpProvider, $routeProvider, $locationProvider) {

	$routeProvider	.when('/', {templateUrl : 'modules/home.html', controller : 'homeController'})
					;

});
