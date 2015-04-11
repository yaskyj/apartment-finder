var myApp = angular.module('myApp');

myApp.factory('Apartment',[
  '$resource',
  //myObj will be created by calling this function
  //and capturing its return value
  function($resource){
    return $resource('http://spidey.zyring.com/cities/:cityName');
  }
  }]);