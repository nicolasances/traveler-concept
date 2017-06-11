
var auth2;
var googleUser;

var travelerModule = angular.module("traveler", [ "ngRoute", "ngMaterial", "homeModule", "loginModule"])
.controller("travelerController", function($scope, $route, $location, $mdMedia, $mdSidenav, $rootScope) {
	
	$scope.go = function(path) {
		$location.path(path);
	};

	$scope.toggleNavbar = function(id) {
		$mdSidenav(id).toggle();
	}
	
	/**
	 * Initializes Google Sign in component
	 */
	$scope.initGoogleSignIn = function() {
		
		gapi.load('auth2', function() {
			
			gapi.auth2.init({client_id: '726328562598-94osltpr4li20h3rbu7rl97gfurs73md.apps.googleusercontent.com'}).then(function() {
				
				auth2 = gapi.auth2.getAuthInstance();
				
				if (!auth2.isSignedIn.get()) {
					$scope.go('/login');
				}
				else {
					googleUser = auth2.currentUser.get();
					
					document.querySelector('#headerUserProfile').src = googleUser.getBasicProfile().getImageUrl();
				}
				
			});
		});
	}

	$scope.$watch(function() {
		return $mdMedia('lg');
	}, function(big) {
		$scope.bigScreen = big;
	});
	$scope.screenIsSmall = $mdMedia('sm');
	
	$scope.initGoogleSignIn();
})
.config(function($httpProvider, $routeProvider, $locationProvider) {

	$routeProvider	.when('/', {templateUrl : 'modules/home.html', controller : 'homeController'})
					.when('/login', {templateUrl : 'modules/login.html', controller : 'loginController'})
					;

});
