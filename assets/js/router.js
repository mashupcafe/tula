// Router

(function(angular, $) {
  'use strict';
  angular.module('Tula').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('login');
    $stateProvider
    .state('login', {
      url: '/login',
      views: {
        root: {
          templateUrl: '../templates/login.html'
        }
      }
    })
    .state('account', {
      url: '/account',
      views: {
        root: {
          templateUrl: '../templates/account.html'
        }
      }
    })
    .state('account.admin', {
      url: '/admin?:tab',
      views: {
        account: {
          templateUrl: '../templates/admin.html'
        }
      }
    })
  });
})(angular, jQuery);
