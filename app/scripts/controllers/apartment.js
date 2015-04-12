'use strict';
/**
 * @ngdoc function
 * @name zyringApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('ApartmentCtrl', ['$scope', '$routeParams', 'Apartment', 'uiGmapGoogleMapApi',
    function($scope, $routeParams, Apartment, uiGmapGoogleMapApi) {
      $scope.cityName = $routeParams.cityName;
      $scope.apartmentList = Apartment.query({cityName: $scope.cityName});
      $scope.currentPage = 0;
      $scope.pageSize = 9;
      $scope.numberOfPages = function() {
        return Math.ceil($scope.apartmentList.length/$scope.pageSize);
      }
      $scope.map = { 
        center: { 
          latitude: 47.6, 
          longitude: -122.3 
        }, 
        zoom: 8
      };
      // uiGmapGoogleMapApi.then(function(maps) {
      // });
  }]);

angular.module('zyringApp')
  .filter('startFrom', function() {
    return function(input, start) {
      start = +start;
      return input.slice(start);
    }
  });
