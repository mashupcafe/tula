// User Controller

(function(angular, $) {
  'use strict';
  angular.module('Tula').controller('UserController', [ '$scope', '$state', 'SharedFactory',
    function($scope, $state, Shared) {
      $scope.user = {};

      var showUser = function(role) {
        switch (role.toLowerCase()) {
          case Shared.USER_ROLES.ADMIN:
            $state.go('account.admin');
            break;
          case Shared.USER_ROLES.STAFF:
            $state.go('account.staff');
            break;
          case Shared.USER_ROLES.PATIENT:
            $state.go('account.patient');
            break;
          case Shared.USER_ROLES.DOCTOR:
            $state.go('account.doctor');
            break;
          default:
            throw 'Unknown User role';
        }
      };

      var init = function() {
        var user = Shared.getUser();
        if (!user) {
          return $state.go('login');
        }
        showUser(user.roles);
      };

      $scope.getStaffList = function(next) {
        Shared.list(Shared.USER_ROLES.STAFF, next);
      };

      $scope.getClinicList = function(next) {
        Shared.list(Shared.USER_ROLES.CLINIC, next);
      };

      $scope.getPatientList = function(next) {
        Shared.list(Shared.USER_ROLES.PATIENT, next);
      };

      $scope.getDoctorList = function(next) {
        Shared.list(Shared.USER_ROLES.DOCTOR, next);
      };

      init();
    }
  ])
})(angular, jQuery);
