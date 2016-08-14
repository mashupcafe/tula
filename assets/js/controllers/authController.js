// Authentication Controller

(function(angular, $) {
  'use strict';
  angular.module('Tula').controller('AuthController', [ '$scope', '$state', 'SharedFactory', 'AuthFactory',
    function($scope, $state, Shared, Auth) {
      $scope.user = {};

      var init = function() {
        if (Shared.getUser()) {
          return $state.go('account');
        }
      };

      $scope.login = function() {
        if (!($scope.user.email && $scope.user.password)) {
          return console.error('Please enter valid email ID and password');
        }
        Auth.login($scope.user, function(err, res) {
          if (err) {
            return console.error(err);
          }
          Shared.setUser(res.data);
          $scope.user = {};
          $state.go('account');
        });
      };

      init();
    }
  ])
})(angular, jQuery);
