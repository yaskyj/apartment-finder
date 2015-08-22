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

apartmentFinder.config(function ($routeProvider) {
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
})
.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApiProvider) {
    GoogleMapApiProvider.configure({
      //key: 'AIzaSyAfltuCM5AGdScNbvXCFPOgos-wpIeL6QA',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  }]);
