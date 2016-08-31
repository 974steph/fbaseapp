angular.module('starter.services')

/**
 * Identifies the capabilities of the device such as email and camera
 * Lists the cordova plugins installed.
 */
 .factory('$whereAmI', function ($q) {

 	function whereis(){
 		var deferred=$q.defer();
 		var onSuccess = function(position) {
 			var pos='Latitude: '          + position.coords.latitude          + '\n' +
 			'Longitude: '         + position.coords.longitude         + '\n' +
 			'Altitude: '          + position.coords.altitude          + '\n' +
 			'Accuracy: '          + position.coords.accuracy          + '\n' +
 			'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
 			'Heading: '           + position.coords.heading           + '\n' +
 			'Speed: '             + position.coords.speed             + '\n' +
 			'Timestamp: '         + position.timestamp                + '\n';
 			deferred.resolve(pos);
 		};

 		function onError(error) {
 			var msg='code: '    + error.code    + '\n' +
 			'message: ' + error.message + '\n';
 			deferred.reject(msg);
 		}

 		navigator.geolocation.getCurrentPosition(onSuccess, onError); 	
 		return deferred.promise;	
 	}

 	return {
 		whereAbouts:whereis
 	}
 });