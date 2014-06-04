'use strict';

angular.module('wixApp')
  .controller('MainCtrl', function ($scope, $wix, myReverse) {

    $scope.handleEvent = function(event) {
      $scope.$apply(function() {
        $scope.message = event;
      });
    };

    $scope.newValue = '';
    $scope.query = 'initial query';
    $scope.$watch('query',
      function reverse(query){
        $scope.newValue = myReverse(query);
      }
      );

    $wix.addEventListener($wix.Events.SETTINGS_UPDATED, $scope.handleEvent);

    if ($wix.Utils.getViewMode() !== 'standalone') {
      $scope.instanceId = $wix.Utils.getInstanceId();
      $scope.instance = $wix.Utils.getInstance();
    }
  });