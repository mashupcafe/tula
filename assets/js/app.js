(function(window, angular, $) {
  'use strict';
  angular.module('Tula', [ 'ui.router' ])
  .run([ '$rootScope', '$state',
    function($rootScope, $state) {
      $rootScope.$state = $state;
    }
   ])

})(window, angular, jQuery);
