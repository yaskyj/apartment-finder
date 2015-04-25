'use strict';

apartmentFinder
  .controller('OneApartmentCtrl', ['$scope', '$routeparams', function($scope, $routeparams) {
    $scope.apartmentId = $routeparams.id
  }]);