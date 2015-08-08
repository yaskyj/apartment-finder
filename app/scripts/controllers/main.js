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
          imgUrl: '../images/seattle.jpg'
        },
        {
          name: 'Redmond',
          imgUrl: '../images/redmond.jpg'
        },
        {
          name: 'Bellevue',
          imgUrl: '../images/bellevue.jpg'
        },
        {
          name: 'Kirkland',
          imgUrl: '../images/kirkland.jpg'
        },
        {
          name: 'Tacoma',
          imgUrl: '../images/tacoma.jpg'
        },
        {
          name: 'Olympia',
          imgUrl: '../images/olympia.jpg'
        }
      ];
  
    }]);
