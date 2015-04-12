'use strict';
/**
 * @ngdoc function
 * @name zyringApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('ApartmentCtrl', ['$scope', '$routeParams', 'Apartment',
    function($scope, $routeParams, Apartment) {
      $scope.cityName = $routeParams.cityName;
      $scope.apartmentList = Apartment.query({cityName: $scope.cityName});
      $scope.currentPage = 0;
      $scope.pageSize = 9;
      $scope.numberOfPages = function() {
        return Math.ceil($scope.apartmentList.length/$scope.pageSize);
      }
  }]);

angular.module('zyringApp')
  .filter('startFrom', function() {
    return function(input, start) {
      start = +start;
      return input.slice(start);
    }
  });
