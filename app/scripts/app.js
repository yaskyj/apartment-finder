'use strict';

/**
 * @ngdoc overview
 * @name zyringApp
 * @description
 * # zyringApp
 *
 * Main module of the application.
 */
angular
  .module('zyringApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'uiGmapgoogle-maps',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/apartments/:cityName', {
        templateUrl: 'views/apartment.html',
        controller: 'ApartmentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApiProvider) {
      GoogleMapApiProvider.configure({
        key: 'AIzaSyAfltuCM5AGdScNbvXCFPOgos-wpIeL6QA',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
      });
    }]);
