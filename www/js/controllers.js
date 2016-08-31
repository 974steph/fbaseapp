angular.module('starter.controllers',  ['ionic.cloud'])
/* attempt to use Ionic push with phonegap-plugin-push . Failed to get a non empty token*/
.controller('DashCtrl',function($scope,$ionicPush, $layaWhatami,$q,$whereAmI) {
  $scope.name="GCM stuff";
  function init(){
    $ionicPush.register().then(function(t) {
      return $ionicPush.saveToken(t);
    }).then(function(t) {
      console.log('Token saved:', t.token);
      alert('Token saved::'+JSON.stringify(t));
    }); 
    $scope.$on('cloud:push:notification', function(data) {
      var msg = data.message;
      alert(msg.title + ': ' + msg.text);
    }); 

  }
  init();
  $scope.debug=function(){return $layaWhatami.cordova();}
  $scope.location=undefined;
  $whereAmI.whereAbouts().then(function(data){
    console.log('location:'+data);
    $scope.location=data;
  },function err(msg){
    $scope.location=msg;console.log('location err:'+msg);
  }); 
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
