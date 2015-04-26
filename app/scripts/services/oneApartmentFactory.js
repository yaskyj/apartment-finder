apartmentFinder.factory('oneApartment',[
    '$resource',
    function($resource){
      return $resource('http://spidey.zyring.com/apartments/:id');
    }]);