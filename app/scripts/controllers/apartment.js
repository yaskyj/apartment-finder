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
      $scope.cityName = $routeParams.cityName;
      Apartment.query({cityName: $scope.cityName}, function(data) {
        $scope.apartmentMarkers = [];
        $scope.apartmentList = data;
        $scope.apartmentChunk = _.chunk($scope.apartmentList, 9);
        $scope.totalItems = $scope.apartmentList.length;
        $scope.currentPage = 1;
        $scope.currentApartments = $scope.apartmentChunk[$scope.currentPage];
        $scope.maxSize = 5;
        $scope.map = { 
          center: { 
            latitude: 47.6, 
            longitude: -122.3 
          }, 
          zoom: 10
        };
        for (i = 0; i < $scope.currentApartments.length; i++) {  
          marker = new google.maps.Marker({
            id: $scope.currentApartments[i].id,
            latitude: $scope.currentApartments[i].latitude,
            longitude: $scope.currentApartments[i].longitude,
            title: $scope.currentApartments[i].title,
            show: false
          })
          marker.onClick = function() {
            console.log("Clicked!");
            marker.show = !marker.show;
          }
          $scope.apartmentMarkers.push(marker);          
        }
        $scope.pageChanged = function() {
          $scope.currentApartments = $scope.apartmentChunk[$scope.currentPage];
          $scope.apartmentMarkers = [];
          for (i = 0; i < $scope.currentApartments.length; i++) {  
            marker = new google.maps.Marker({
              id: $scope.currentApartments[i].id,
              latitude: $scope.currentApartments[i].latitude,
              longitude: $scope.currentApartments[i].longitude,
              title: $scope.currentApartments[i].title
            })
            $scope.apartmentMarkers.push(marker);          
          }
        };
      });
  }]);