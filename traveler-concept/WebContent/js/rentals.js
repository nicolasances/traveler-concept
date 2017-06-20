var rentalsModule = angular.module("rentalsModule", ['GoogleServiceModule']);

/********************************************************************************************************
 * RENTAL - NEW
 *********************************************************************************************************/
rentalsModule.controller("rentalsNewController", [ '$scope', '$http', '$interval', '$location', 'GoogleService', '$timeout' , function($scope, $http, $interval, $location, GoogleService, $timeout) {
	
	$scope.init = function() {
		
		$scope.currentStep = 1;
		
		$scope.addresses = [];
		
		$scope.loadMap();
	}
	
	/**
	 * Looks for the address written in the #address field
	 */
	$scope.searchAddress = function() {
		
		var address = document.querySelector('#address').value;
		
		$scope.addresses = [];
		
		GoogleService.searchAddress(address, function(records) {

			var i;
			for (i = 0; i < records.length; i++) {
				$scope.addresses.push(records[i]);
			}
			
		});
		
	}
	
	$scope.loadMap = function() {
		$timeout(function() {
			if (googleMaps.ready) {
				$scope.myHomeMap = new google.maps.Map(document.getElementById('pinHomeMap'), {
					center: {lat: 40.740888, lng: -73.989274},
					zoom: 15,
					scrollwheel: false, 
					streetViewControl: false,
					mapTypeControl: false
				});
			}
		}, 300);
	}
	
	$scope.selectAddress = function(address) {
		$scope.myHomeMap.setCenter(address.geo);
		new google.maps.Marker({position: {lat: address.geo.lat, lng: address.geo.lng }, map: $scope.myHomeMap});
		
		$scope.addresses = [];
	}
	
	$scope.init();
	
} ]);

