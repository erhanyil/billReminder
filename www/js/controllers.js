angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {})

.controller('HomeCtrl', function($scope,API,$rootScope, $ionicPopup) {

  $scope.getBills = function(){
    API.getBills().then(function(result) {
      $scope.reminders = result.data;
    });
  };
  $scope.getBills();

  $scope.deleteReminder = function(reminder_ID){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Dikkat !',
      template: 'Bu kaydı silmek istedğinizden emin misiniz?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        API.deleteReminder({reminder_ID:reminder_ID}).then(function(result) {
          $scope.getBills();
        });
      }
    });
  };

})

.controller('ReminderController', function($scope, $stateParams, API) {

  $scope.editable = false;

  $scope.getBills = function(reminder_ID){
    API.getBills({reminder_ID:reminder_ID}).then(function(result) {
      $scope.reminder = result.data;
    });
  }
  $scope.getBills($stateParams.reminderID);

  $scope.edit = function()
  {
    $scope.editable = true;
  }

})

.controller('SettingsCtrl', function($scope, $stateParams) {})

.controller('modalController', function($scope,$rootScope, $stateParams, API) {

  $scope.modalData = {};
  $scope.modalData.bill_type = $$rootScope.billTypes[0].name;
  $scope.modalData.status = $$rootScope.billStatus[0].name;

  $scope.doLogin = function() {
    console.log($scope.modalData);
  };

  $scope.doRegister = function () {
    console.log($scope.modalData);
  }

  $scope.newReminder = function () {
    $scope.modalData.bill_data = js_yyyy_mm_dd_hh_mm_ss($scope.modalData.bill_data);
    API.newReminder($scope.modalData).then(function(result) {
      $scope.reminders = result.data;
    });
  }

});
