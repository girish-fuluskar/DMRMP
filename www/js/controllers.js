angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {
  $scope.goAccAdmin = function(){
    $state.go('accountAdministration');
  }
})

.controller('AccAdminCtrl', function($scope, $state){
  
  $scope.inputs = [];
  $scope.activityField = [];

  $scope.addfield=function(){
    $scope.inputs.push({})
  }

  $scope.addActivityField = function(){
    $scope.activityField.push({})
  }
})

.controller('AddProjectCtrl', function($scope){

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

.controller('HomeCtrl', function($scope, $ionicModal, $timeout, $state){

  // Form data for the login modal
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.login = modal;
  });

  $scope.loginNow = function(){
    $scope.login.show();
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.login.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
      $state.go('dashboard');
    }, 1000);
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
