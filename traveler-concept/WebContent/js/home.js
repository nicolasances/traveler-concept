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
	    center: {lat: 45.475757, lng: 9.168083},
	    scrollwheel: false,
	    zoom: 2,
	    streetViewControl: false,
	    mapTypeControl: false
	});
	
	map.setOptions({styles: styles});
	
}

homeModule.controller("homeController", [ '$scope', '$http', '$timeout', '$mdDialog', '$mdSidenav', function($scope, $http, $timeout, $mdDialog, $mdSidenav) {

	$scope.init = function() {
		
		$scope.loadGoogleMap();
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
