'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('ApartmentCtrl', ['$scope', '$routeParams'],
  function($scope, $routeParams) {
    var cityName = $routeParams.cityName;
  });
