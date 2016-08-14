// Authentication Factory

(function(angular) {
  'use strict';
  angular.module('Tula').factory('AuthFactory', [ 'NetworkFactory',
    function(Network) {
      var self = this;
      var API = {
        LOGIN: 'user/login'
      };

      // login
      self.login = function(payload, next) {
        Network.POST(API.LOGIN, payload, next);
      };

      return self;
    }
  ])
})(angular);
