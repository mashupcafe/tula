// Shared Factory

(function(angular) {
  'use strict';
  angular.module('Tula').factory('SharedFactory', [ '$window', 'NetworkFactory',
    function($window, Network) {
      var self = this;
      var LOCAL_TOKENS = {
        USER: 'tula_user'
      };

      var LIST_API = {
        'ADMIN': 'admin',
        'STAFF': 'staff',
        'PATIENT': 'patient',
        'DOCTOR': 'doctor'
      };

      var USER_ROLES = {
        'ADMIN': 'admin',
        'STAFF': 'staff',
        'PATIENT': 'patient',
        'DOCTOR': 'doctor'
      };

      var getListApiForRole = function(role) {
        switch (role) {
          case USER_ROLES.ADMIN:
            return LIST_API.ADMIN;
            break;
          case USER_ROLES.STAFF:
            return LIST_API.STAFF;
            break;
          case USER_ROLES.PATIENT:
            return LIST_API.PATIENT;
            break;
          case USER_ROLES.DOCTOR:
            return LIST_API.DOCTOR;
            break;
          default:
            throw 'Unknown role';
        }
      };

      var init = function() {
        self.user = {};
      };

      var setLocalStorage = function(token, val) {
        if (typeof val !== 'object') {
          throw 'Val must be JSON object';
        }
        $window.localStorage.setItem(token, JSON.stringify(val));
      };

      var getLocalStorage = function(token, val) {
        return JSON.parse($window.localStorage.getItem(token));
      };

      self.setUser = function(user) {
        self.user = user;
        setLocalStorage(LOCAL_TOKENS.USER, user);
      };

      self.getUser = function() {
        var user = getLocalStorage(LOCAL_TOKENS.USER);
        if (!user) {
          return null;
        }
        self.user = user;
        return self.user;
      };

      self.USER_ROLES = USER_ROLES;

      self.list = function(role, next) {
        Network.GET(getListApiForRole(role), next);
      };

      init();
      return self;
    }
  ])
})(angular);
