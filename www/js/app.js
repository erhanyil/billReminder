angular.module('starter', ['ionic', 'starter.controllers','ion-datetime-picker'])

.run(function($ionicPlatform, $rootScope, Modal ,Auth) {

  $rootScope.Modal = Modal;
  $rootScope.Auth = Auth;

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
;
