// Network Factory

(function(angular) {
  'use strict';
  angular.module('Tula').factory('NetworkFactory', [ '$http',
    function($http) {
      var self = this;
      var SERVER_URL = 'http://localhost:1337/';

      // POST request
      self.POST = function(url, payload, next) {
        $http.post(SERVER_URL + url, payload).then(function(res) {
          next(null, res);
        }, function(err) {
          next(err);
        });
      };

      // GET request
      self.GET = function(url, next) {
        $http.get(SERVER_URL + url).then(function(res) {
          next(null, res);
        }, function(err) {
          next(err);
        });
      };

      return self;
    }
  ])
})(angular);
