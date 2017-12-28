angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {

})

.controller('HomeCtrl', function($scope,API) {

  $scope.playlists = { title: 'Reggae', id: 1 };

  $scope.getBills = function(){
    API.getBills($scope.playlists).then(function(result) {
      console.log("ctrl",result);
    });
  }
$scope.getBills();

})

.controller('ReminderController', function($scope, $stateParams) {})

.controller('SettingsCtrl', function($scope, $stateParams) {})

.controller('modalController', function($scope, $stateParams) {

  $scope.modalData = {};

  $scope.doLogin = function() {
    console.log($scope.modalData);
  };

  $scope.doRegister = function () {
    console.log($scope.modalData);
  }

  $scope.newReminder = function () {
    console.log($scope.modalData);
  }

})
;
