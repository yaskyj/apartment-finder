var myApp = angular.module('myApp');

myApp.factory('myObj',[
  //myObj will be created by calling this function
  //and capturing its return value
  function(){
    var theObj = {
    value1: 'testValue',
    method1: function() {
      console.log('Im a factory object');
    }
  }
  return theObj;
  }]);