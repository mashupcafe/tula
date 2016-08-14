// Admin Controller

(function(angular, $) {
  'use strict';
  angular.module('Tula').controller('AdminController', [ '$scope', '$state', 'SharedFactory',
    function($scope, $state, Shared) {
      $scope.user = {};
      $scope.list = [];
      $scope.TABS = {
        STAFFS: 'staffs',
        CLINICS: 'clinics',
        DOCTORS: 'doctors',
        PATIENTS: 'patients'
      };

      var setTab = function(tabName) {
        $state.go('account.admin', {tab: tabName}, {notify: false});
        var listCallback = function(err, res) {
          if (err) {
            throw err;
          }
          console.log(res);
          $scope.list = res.data;
          $scope.$applyAsync();
        };

        switch (tabName) {
          case $scope.TABS.STAFFS:
            return $scope.getStaffList(listCallback);
            break;
          case $scope.TABS.CLINICS:
            return $scope.getClinicList(listCallback);
            break;
          case $scope.TABS.DOCTORS:
            return $scope.getDoctorList(listCallback);
            break;
          case $scope.TABS.PATIENT:
            return $scope.getPatientList(listCallback);
            break;
          default:
            throw 'Unknow tab';
        }
      };

      var init = function() {
        var user = Shared.getUser();
        if (!(user && user.roles.toLowerCase() === Shared.USER_ROLES.ADMIN)) {
          return $state.go('account');
        }
        setTab($scope.TABS.STAFFS);
      };

      $scope.setTab = function(e, tabName) {
        e.preventDefault();
        setTab(tabName);
      };
      init();
    }
  ])
})(angular, jQuery);
