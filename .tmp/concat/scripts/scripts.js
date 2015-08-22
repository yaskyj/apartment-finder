'use strict';

/**
 * @ngdoc overview
 * @name zyringApp
 * @description
 * # zyringApp
 *
 * Main module of the application.
 */
var apartmentFinder = angular.module('apartmentFinder', ['ngAnimate', 'ngResource', 'ngRoute', 'ngTouch', 'wu.masonry', 'uiGmapgoogle-maps', 'ui.bootstrap']);

apartmentFinder.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/apartments/:cityName', {
      templateUrl: 'views/apartment.html',
      controller: 'ApartmentCtrl'
    })
    .when('/apartment/:id', {
      templateUrl: 'views/oneapartment.html',
      controller: 'OneApartmentCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}])
.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApiProvider) {
    GoogleMapApiProvider.configure({
      //key: 'AIzaSyAfltuCM5AGdScNbvXCFPOgos-wpIeL6QA',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
apartmentFinder.controller('MainCtrl',['$scope', function ($scope) {
      $scope.cities = [
        {
          name: 'Seattle',
          imgUrl: '/images/seattle.jpg'
        },
        {
          name: 'Redmond',
          imgUrl: '/images/redmond.jpg'
        },
        {
          name: 'Bellevue',
          imgUrl: '/images/bellevue.jpg'
        },
        {
          name: 'Kirkland',
          imgUrl: '/images/kirkland.jpg'
        },
        {
          name: 'Tacoma',
          imgUrl: '/images/tacoma.jpg'
        },
        {
          name: 'Olympia',
          imgUrl: '/images/olympia.jpg'
        }
      ];
  
    }]);

'use strict';

apartmentFinder
  .controller('ApartmentCtrl', ['$scope', '$routeParams', 'Apartment',
    function($scope, $routeParams, Apartment) {
      var marker,
          i;
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
            price: $scope.currentApartments[i].price,
            thumbnail: $scope.currentApartments[i].thumbnail,
            show: false
          });
          marker.onClick = function() {
            console.log("Clicked!");
            marker.show = !marker.show;
          };
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
              title: $scope.currentApartments[i].title,
              price: $scope.currentApartments[i].price,
              thumbnail: $scope.currentApartments[i].thumbnail,
              show: false
            });
            marker.onClick = function() {
              console.log("Clicked!");
              marker.show = !marker.show;
            };
            $scope.apartmentMarkers.push(marker);
          }
        };
      });
  }]);
'use strict';

apartmentFinder
  .controller('OneApartmentCtrl', ['$scope', '$routeParams', 'oneApartment', function($scope, $routeParams, oneApartment) {
    $scope.apartmentId = $routeParams.id
    oneApartment.get({id: $scope.apartmentId}, function(data) {
      $scope.singleApartment = data;
    });
  }]);
apartmentFinder.factory('Apartment',[
    '$resource',
    //myObj will be created by calling this function
    //and capturing its return value
    function($resource){
      return $resource('http://spidey.zyring.com/cities/:cityName');
    }]);
apartmentFinder.factory('oneApartment',[
    '$resource',
    function($resource){
      return $resource('http://spidey.zyring.com/apartments/:id');
    }]);