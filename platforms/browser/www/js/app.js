angular.module('starter', ['ionic', 'starter.controllers','ion-datetime-picker'])

.constant('API_URL', 'http://stdiosoft.com/billReminder/billReminderAPI.php')
//.constant('API_URL', 'http://stdiosoft.com/toDo/www/')

.run(function($ionicPlatform, $state, $rootScope, Modal ,Auth) {

  $rootScope.Modal = Modal;
  $rootScope.Auth = Auth;
  $rootScope.state = $state;

  $rootScope.billTypes = [{name:'Lütfen Seçiniz',value:0},{name:'Doğalgaz',value:1},{name:'Su',value:2},{name:'İnternet',value:3},{name:'Telefon',value:4}];
  $rootScope.billStatus = [{name:'Lütfen Seçiniz',value:0},{name:'Yüksek',value:1},{name:'Orta',value:2},{name:'Normal',value:3}];

  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

  .state('app.reminder', {
    url: '/home/:reminderID',
    views: {
      'menuContent': {
        templateUrl: 'templates/reminder.html',
        controller: 'ReminderController'
      }
    }

  });
  $urlRouterProvider.otherwise('/app/home');
})

.service('Modal',['$ionicModal', '$state','$rootScope', function ($ionicModal, $state, $rootScope) {

    var currentModal = "";

    this.open = function (template) {
     if (currentModal != ""){
       currentModal.hide();
       currentModal = "";
     }
     $ionicModal.fromTemplateUrl('modals/'+template+'.html', { scope: $rootScope }).then(function(modal) {
        currentModal = modal;
        currentModal.show();
      });
    };

    this.close = function () {
      currentModal.hide();
    };
}])

.factory("Auth",function($state,$ionicHistory,$window,$rootScope){

  var authData = { authorizationData : null, isAuthenticated: false };

  return {

    setAuth: function(data) {
        authData.authorizationData = data;
        authData.isAuthenticated = true;
        setToLocalStorage('Auth', authData);
        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true
        }); 

    },

    getAuth: function() {
      return getFromLocalStorage('Auth');
    },

    clearAuth: function(){
      clearLocalStorage();
      authData = {authorizationData : null, isAuthenticated: false };
      $window.location.reload();
    },

  };
})

.factory('API', function($http, $window , API_URL) {

  var response = {}, request = [];

  function clear() { response = {}, request = []; }

  function returnValue(returnValue) {
    clear();
    return returnValue;
  }

  return {

    newReminder: function(data){
        request.push({data: (data == undefined ? {} : data), key: arguments.callee.name});
        return $http.post(API_URL, request).success(function(response){
          returnValue(response);
        }).error(function(error) {
          console.log("error",error);
        }).catch(function(error) {
          console.log("error",error);
        });
    },

    getBills: function(data) {
        request.push({data: (data == undefined ? {} : data), key: arguments.callee.name});
        return $http.post(API_URL, request).success(function(response){
          returnValue(response);
        }).error(function(error) {
          console.log("error",error);
        }).catch(function(error) {
          console.log("error",error);
        });
    },

    deleteReminder: function(data){
        request.push({data: (data == undefined ? {} : data), key: arguments.callee.name});
        return $http.post(API_URL, request).success(function(response){
          returnValue(response);
        }).error(function(error) {
          console.log("error",error);
        }).catch(function(error) {
          console.log("error",error);
        });
    },

    updateReminder: function(data){
        request.push({data: (data == undefined ? {} : data), key: arguments.callee.name});
        return $http.post(API_URL, request).success(function(response){
          returnValue(response);
        }).error(function(error) {
          console.log("error",error);
        }).catch(function(error) {
          console.log("error",error);
        });
    },
    
  };
});
;
