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
          imgUrl: 'http://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg'
        },
        {
          name: 'Redmond',
          imgUrl: 'http://upload.wikimedia.org/wikipedia/commons/1/16/Bicycle_Capital_of_the_Northwest.JPG'
        },
        {
          name: 'Bellevue',
          imgUrl: 'http://upload.wikimedia.org/wikipedia/commons/2/21/Aerial_Bellevue_Washington_November_2011.jpg'
        },
        {
          name: 'Kirkland',
          imgUrl: 'http://upload.wikimedia.org/wikipedia/commons/7/71/Kirkland_waterfront.jpg'
        },
        {
          name: 'Tacoma',
          imgUrl: 'http://upload.wikimedia.org/wikipedia/commons/0/01/Mount_Rainier_over_Tacoma.jpg'
        },
        {
          name: 'Olympia',
          imgUrl: 'http://upload.wikimedia.org/wikipedia/commons/b/b7/Olympia,_Washington_-_Capital_Lake_Boardwalk.jpg'
        }
      ];
  
    }]);
