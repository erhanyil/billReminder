angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {

})

.controller('HomeCtrl', function($scope) {

  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

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
