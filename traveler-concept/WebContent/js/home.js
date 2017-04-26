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
		$scope.loadStoryline();
	}
	
	$scope.loadStoryline = function() {
		
		$scope.storyline = new Object();
		$scope.storyline.days = [];
		$scope.storyline.days.push({day: new Date(moment("02/04/2017", "DD/MM/YYYY")), feeds: []})
		
//		$scope.storyline.days[0].feeds.push({avatar: 'angelina', who: 'Angelina', where: 'Singapore', type: 'search', from: new Date(moment("01/08/2017", "DD/MM/YYYY"), to: new Date(moment("12/08/2017", "DD/MM/YYYY"))});
//		$scope.storyline.days[0].feeds.push({avatar: 'ryan', who: 'Ryan', type: 'leaves', where: 'New York', from: new Date(moment("21/07/2017", "DD/MM/YYYY"), to: new Date(moment("28/07/2017", "DD/MM/YYYY"))});
//		$scope.storyline.days[0].feeds.push({avatar: 'jennifer', who: 'Jennifer', , type: 'tip', tipType: 'food'});
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
