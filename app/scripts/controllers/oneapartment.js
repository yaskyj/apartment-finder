'use strict';

apartmentFinder
  .controller('OneApartmentCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.apartmentId = $routeParams.id
  }]);