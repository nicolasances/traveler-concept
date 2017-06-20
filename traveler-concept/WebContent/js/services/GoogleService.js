
var googleServiceModule = angular.module('GoogleServiceModule', []);

googleServiceModule.factory('GoogleService', [ '$http', '$rootScope', '$location', function($http, $rootScope, $location) {

	return {
		
		getGeo : function(address, callback) {
			
			$http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyA4KA2WAZ2BKf4qrAWPWvfYKen0A0p9gx4").success(function(data, status, header, config) {
				
				if (data != null && data.results != null) {
					
					var geo = data.results[0].geometry.location;
					
					callback(geo);
					
				}
			});
			
		}, 
		
		searchAddress : function(address, callback) {

			$http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyA4KA2WAZ2BKf4qrAWPWvfYKen0A0p9gx4").success(function(data, status, header, config) {
				
				if (data != null && data.results != null) {

					var records = [];
					
					for (i=0; i<data.results.length; i++) {
						records.push({name: data.results[i].formatted_address, geo: data.results[i].geometry.location});
					}
					
					return callback(records);
				}
				
				return callback();
			});
		}
	}

} ]);
