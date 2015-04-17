'use strict';
var elementCounter = 0,
    pageNo = 0,
    maxSize = 9,
    checkCurrentApartments,
    checkCurrentPage,
    marker,
    i;
/**
 * @ngdoc function
 * @name zyringApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zyringApp
 */
apartmentFinder
  .controller('ApartmentCtrl', ['$scope', '$routeParams', 'Apartment', 'uiGmapGoogleMapApi',
    function($scope, $routeParams, Apartment, uiGmapGoogleMapApi) {
      $scope.cityName = $routeParams.cityName;
      Apartment.query({cityName: $scope.cityName}, function(data) {
        $scope.apartmentList = data;
        $scope.apartmentChunk = _.chunk($scope.apartmentList, 9);
        $scope.totalItems = $scope.apartmentList.length;
        $scope.currentPage = 1;
        $scope.currentApartments = $scope.apartmentChunk[$scope.currentPage];
        $scope.pageChanged = function() {
          $scope.currentApartments = $scope.apartmentChunk[$scope.currentPage];
          console.log('Page changed to: ' + $scope.currentPage);
        };

        // console.log($scope.apartmentChunk[0]);
        // for (i = 0; i < $scope.currentApartments.length; i++) {  
        //   marker = new google.maps.Marker({
        //     position: new google.maps.LatLng($scope.currentApartments[i].latitude, $scope.currentApartments[i].longitude),
        //     map: map,
        //     title: $scope.currentApartments[i].title
        //   })
        // }
        // $scope.currentApartments = $scope.currentPage === 0 ? $scope.apartmentList.slice(0, 10) : $scope.apartmentList.slice(($scope.currentPage*$scope.pageSize), ($scope.currentPage*$scope.pageSize)+$scope.pageSize);
        // $scope.currentPage = 0;
        // $scope.pageSize = 9;
        // $scope.numberOfPages = function() {
        //   return Math.ceil($scope.apartmentList.length/$scope.pageSize);
        // }
      });
      // checkCurrentPage = window.setInterval(console.log($scope.currentPage), 100);
      // checkCurrentApartments = window.setInterval(console.log($scope.currentApartments), 100);
      // $scope.pages = [];      
      // for (var i = 0; i < $scope.numberOfPages; i++) {
      //   $scope.pages.push([]);
      //   console.log($scope.pages)
      // }
      // while (elementCounter < $scope.apartmentList.length) {
      //   pageNo = parseInt(elementCounter/maxSize);
      //   $scope.pages[pageNo].push($scope.apartmentList[elementCounter]);
      //   elementCounter += 1;
      // }
      $scope.map = { 
        center: { 
          latitude: 47.6, 
          longitude: -122 
        }, 
        zoom: 10
        // bound: {}
      };
  }]);
// .filter('startFrom', function() {
//     return function(input, start) {
//       start = +start;
//       return input.slice(start);
//     }
//   })
// angular.module('zyringApp')
