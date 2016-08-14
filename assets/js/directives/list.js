(function(angular) {
  angular.module('Tula').directive('list', [
    function() {
      var link = function(scope, ele, attr) {
        scope.defaultMsg = attr.defaultMsg;
        console.log(scope.payload);
      };

      return {
        scope: {
          payload: '=',
          type: '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: '../templates/common/list.html',
        link: link
      }
    }
  ])
})(angular);
