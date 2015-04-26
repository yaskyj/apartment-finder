'use strict';

apartmentFinder
  .controller('OneApartmentCtrl', ['$scope', '$routeParams', 'oneApartment', function($scope, $routeParams, oneApartment) {
    $scope.apartmentId = $routeParams.id
    oneApartment.get({id: $scope.apartmentId}, function(data) {
      console.log(data);
    });
  }]);