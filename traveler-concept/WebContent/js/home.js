var homeModule = angular.module("homeModule", []);

var map;

initMap = function() {
	var styles = [
	              {"featureType": "administrative.country", "elementType": "labels", "stylers": [{ "color": "#EEEEEE" }, { "visibility": "off" }]},
	              {"featureType": "administrative.province", "elementType": "labels", "stylers": [{ "color": "#EEEEEE" }, { "visibility": "off" }]},
	              {"featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#9b9b9b" }]}, 
	              {"elementType": "labels.text.fill", stylers: [{"color": "#606060"}]}, 
	              {"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}
	              ];
	
	map = new google.maps.Map(document.getElementById('mapdiv'), {
	    center: {lat: 19.475757, lng: 9.168083},
	    scrollwheel: false,
	    zoom: 1,
	    streetViewControl: false,
	    mapTypeControl: false
	});
	
	map.setOptions({styles: styles});
	
}

homeModule.controller("homeController", [ '$scope', '$http', '$timeout', '$interval', '$mdDialog', '$mdSidenav', function($scope, $http, $timeout, $interval, $mdDialog, $mdSidenav) {

	$scope.init = function() {
		
		$scope.loadGoogleMap();
		$scope.loadStoryline();
		
		$scope.loadGoogleUserProfileTimer = $interval($scope.loadGoogleUserProfile, 500);
	}
	
	$scope.loadGoogleUserProfile = function() {
		
		if (auth2 != null) {
			
			$interval.cancel($scope.loadGoogleUserProfileTimer);
			
			document.querySelector('#homeSocialProfilePicture').src = googleUser.getBasicProfile().getImageUrl();
		}
	}
	
	$scope.loadStoryline = function() {
		
		$scope.storyline = new Object();
		$scope.storyline.days = [];
		$scope.storyline.days.push({day: new Date(moment("02/04/2017", "DD/MM/YYYY")), feeds: []})
		$scope.storyline.days.push({day: new Date(moment("01/04/2017", "DD/MM/YYYY")), feeds: []})
		
		$scope.storyline.days[0].feeds.push({avatar: 'ryan', who: 'Ryan', type: 'leaves', where: 'New York', from: new Date(moment("21/07/2017", "DD/MM/YYYY")), to: new Date(moment("28/07/2017", "DD/MM/YYYY")), showMenu: false});
		$scope.storyline.days[0].feeds.push({avatar: 'angelina', who: 'Angelina', type: 'search', where: 'Singapore', from: new Date(moment("03/08/2017", "DD/MM/YYYY")), to: new Date(moment("28/08/2017", "DD/MM/YYYY")), showMenu: false});
		
		$scope.storyline.days[1].feeds.push({avatar: 'reynolds', who: 'Reynold', type: 'tip', where: 'Miami', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', showMenu: false});
		$scope.storyline.days[1].feeds.push({avatar: 'jennifer', who: 'Jennifer', type: 'search', where: 'New York', from: new Date(moment("02/07/2017", "DD/MM/YYYY")), to: new Date(moment("15/07/2017", "DD/MM/YYYY")), showMenu: false});
		
		$timeout(function() {
			if (googleMaps.ready) {
				$scope.ryanMap = new google.maps.Map(document.getElementById('ryan-map'), {
					center: {lat: 40.740888, lng: -73.989274},
					zoom: 15,
					scrollwheel: false, 
					streetViewControl: false,
					mapTypeControl: false
				});
				
				new google.maps.Marker({position: {lat: 40.740888, lng: -73.989274 }, map: $scope.ryanMap});
				
			}
		}, 300);
	}
	
	/**
	 * Creates the map when google maps is ready and downloaded
	 */
	$scope.loadGoogleMap = function() {

		var timer = setInterval(function() {
			
			if (googleMaps.ready) {
				
				window.clearInterval(timer);
				
				initMap();
				
			}
			
		}, 300);
	}
	
	$scope.init();
	
} ]);
