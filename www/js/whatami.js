angular.module('starter.services')

/**
 * Identifies the capabilities of the device such as email and camera
 * Lists the cordova plugins installed.
 */
 .factory('$layaWhatami', function () {

 	function ionicDetail(){
 		var whatami={};
 		whatami.webview=ionic.Platform.isWebView();
 		whatami.ipad=ionic.Platform.isIPad();
 		whatami.ios=ionic.Platform.isIOS();
 		whatami.android=ionic.Platform.isAndroid();
 		whatami.windowPhone=ionic.Platform.isWindowsPhone();
 		whatami.platform=ionic.Platform.platform();
 		whatami.version=ionic.Platform.version();
 		if(ionic.Platform.navigator) {
 			whatami.navigator={
 				userAgent:ionic.Platform.navigator.userAgent,
 				platform:ionic.Platform.navigator.platform,
 				vendor:ionic.Platform.navigator.vendor
 			};     
 		} 
 		return whatami;
 	}

 	function cordovaDevice(){
 		var whatami={};
 		if(window.cordova){
 			if(window.cordova.plugins) whatami.plugins=Object.keys(window.cordova.plugins);
 			whatami.device=window.device;
 		}
 		whatami.plugins=whatami.plugins||[];
 		if(window.FCMPlugin)whatami.plugins.push('firebase');
 		if(window.shake)whatami.plugins.push('shake');
 		if(navigator.camera)whatami.plugins.push('camera');
 		if(navigator.splashscreen)whatami.plugins.push('splash');
 		if(navigator.accelerometer)whatami.plugins.push('accelerate');
 		if(navigator.compass)whatami.plugins.push('compass');
 		if(navigator.geolocation)whatami.plugins.push('geo');
 		return whatami;
 	}

 	function summarize(){
 		return {ionic:!!ionic,cordova:!!window.cordova};
 	}

 	function emailEnabled(){
 		if(window.cordova &&window.cordova.plugins&&window.cordova.plugins.email && window.cordova.plugins.email.open){
 			return true;
 		}
 		return undefined;
 	}

 	return {
 		summary:summarize,
 		ionic:ionicDetail,
 		cordova:cordovaDevice,
 		canEmail:emailEnabled
 	}
 });