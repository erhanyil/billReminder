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


.factory('Server', function($http, Notification, Handler, $window,Session) {

  var main_API_URL_LOCAL = "http://localhost/toDo/www/";
  var main_API_URL = "http://stdiosoft.com/toDo/www/";

  var createNewItem_API_URL = main_API_URL+'php/createNewItem.php';
  var createNewUser_API_URL = main_API_URL+'php/createNewUser.php';
  var getItems_API_URL = main_API_URL+'php/getItems.php';
  var deleteItem_API_URL = main_API_URL+'php/deleteItem.php';
  var editItem_API_URL = main_API_URL+'php/editItem.php';
  var login_API_URL = main_API_URL+'php/login.php';
  var forRabbit_API_URL = main_API_URL+'php/forRabbit.php';

  var _userLoginDataService;
  var _data = {};
  return {

    createNewItem: function(data){
        data.userID = -1;
        if(Session.getSession().isAuthenticated) {
          data.userID = Session.getSession().userID;
        }
        data.notification = data.notification ? 0 : 1;
        return $http.post(createNewItem_API_URL, data).success(function(response){
          if(response == 0){
            Handler.successHandler(response,"Listeye Başarıyla Eklendi");
          }else{
            Handler.errorHandler(response);
          }
        }).error(function(error) {
            Handler.errorHandler(error);
        });
    },

    getItems: function(userID) {
        _data.userID = userID;
        _responseData = [];
        return $http.post(getItems_API_URL, _data).success(function(response){
          if(response != '1' && response != undefined && response != null){
            for(var i=0;i<response.userItemData.length;i++){
              response.userItemData[i].notification = response.userItemData[i].notification == 0 ? true : false;
            }
             return _responseData = response.userItemData;
          }else{
            Handler.errorHandler("Error:" +response);
          }
        }).error(function(error) {
            Handler.errorHandler(error);
        });
        return _responseData;
    }
    
  };
});
;
