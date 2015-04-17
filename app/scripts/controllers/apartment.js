'use strict';
var elementCounter = 0,
    pageNo = 0,
    maxSize = 9,
    checkCurrentApartments,
    checkCurrentPage,
    marker,
    i;

apartmentFinder
  .controller('ApartmentCtrl', ['$scope', '$routeParams', 'Apartment', 'uiGmapGoogleMapApi',
    function($scope, $routeParams, Apartment, uiGmapGoogleMapApi) {
      $scope.map = { 
        center: { 
          latitude: 47.6, 
          longitude: -122 
        }, 
        zoom: 10
        // bound: {}
      };
      $scope.cityName = $routeParams.cityName;
      Apartment.query({cityName: $scope.cityName}, function(data) {
        $scope.apartmentList = data;
        $scope.apartmentChunk = _.chunk($scope.apartmentList, 9);
        $scope.totalItems = $scope.apartmentList.length;
        $scope.currentPage = 1;
        $scope.currentApartments = $scope.apartmentChunk[$scope.currentPage];
        $scope.maxSize = 5;
        $scope.pageChanged = function() {
          $scope.currentApartments = $scope.apartmentChunk[$scope.currentPage];
        };
        for (i = 0; i < $scope.currentApartments.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng($scope.currentApartments[i].latitude, $scope.currentApartments[i].longitude),
            map: map,
            title: $scope.currentApartments[i].title
          })
        }
      });
  }]);