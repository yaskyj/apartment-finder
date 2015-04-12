'use strict';
var elementCounter = 0,
    pageNo = 0,
    maxSize = 9;
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
      $scope.pages = [];      
      for (var i = 0; i < $scope.numberOfPages; i++) {
        $scope.pages.push([]);
        console.log($scope.pages)
      }
      while (elementCounter < $scope.apartmentList.length) {
        pageNo = parseInt(elementCounter/maxSize);
        $scope.pages[pageNo].push($scope.apartmentList[elementCounter]);
        elementCounter += 1;
      }
      $scope.map = { 
        center: { 
          latitude: 47.6, 
          longitude: -122 
        }, 
        zoom: 10,
        bound: {}
      };
      // var createApartmentMarker = function(i, bounds, idKey) {
      //   var lat_min = bounds.southwest.latitude,
      //       lat_range = bounds.northeast.latitude - lat_min,
      //       lng_min = bounds.southwest.longitude,
      //       lng_range = bounds.northeast.longitude - lng_min;

      //   if (idKey == null) {
      //     idKey = "id";
      //   }

      //   var latitude = lat_min + (Math.random() * lat_range);
      //   var longitude = lng_min + (Math.random() * lng_range);
      //   var ret = {
      //     latitude: latitude,
      //     longitude: longitude,
      //     title: 'm' + i
      //   };
      //   ret[idKey] = i;
      //   return ret;
      // };
      // $scope.apartmentMarkers = [];
      // $scope.$watch(function() {
      //   return $scope.map.bounds;
      //   }, function(nv, ov) {
      //   // Only need to regenerate once
      //   if (!ov.southwest && nv.southwest) {
      //     var markers = [];
      //     for (var i = 0; i < 50; i++) {
      //       markers.push(createApartmentMarker(i, $scope.map.bounds))
      //     }
      //     $scope.randomMarkers = markers;
      //   }
      // }, true);
      // uiGmapGoogleMapApi.then(function(maps) {
      // });
  }]);

// angular.module('zyringApp')
//   .filter('startFrom', function() {
//     return function(input, start) {
//       start = +start;
//       return input.slice(start);
//     }
//   });
