"use strict";var apartmentFinder=angular.module("apartmentFinder",["ngAnimate","ngResource","ngRoute","ngTouch","wu.masonry","uiGmapgoogle-maps","ui.bootstrap"]);apartmentFinder.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/apartments/:cityName",{templateUrl:"views/apartment.html",controller:"ApartmentCtrl"}).when("/apartment/:id",{templateUrl:"views/oneapartment.html",controller:"OneApartmentCtrl"}).otherwise({redirectTo:"/"})}]).config(["uiGmapGoogleMapApiProvider",function(a){a.configure({key:"AIzaSyAfltuCM5AGdScNbvXCFPOgos-wpIeL6QA",v:"3.17",libraries:"weather,geometry,visualization"})}]),apartmentFinder.controller("MainCtrl",["$scope",function(a){a.cities=[{name:"Seattle",imgUrl:"http://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg"},{name:"Redmond",imgUrl:"http://upload.wikimedia.org/wikipedia/commons/1/16/Bicycle_Capital_of_the_Northwest.JPG"},{name:"Bellevue",imgUrl:"http://upload.wikimedia.org/wikipedia/commons/2/21/Aerial_Bellevue_Washington_November_2011.jpg"},{name:"Kirkland",imgUrl:"http://upload.wikimedia.org/wikipedia/commons/7/71/Kirkland_waterfront.jpg"},{name:"Tacoma",imgUrl:"http://upload.wikimedia.org/wikipedia/commons/0/01/Mount_Rainier_over_Tacoma.jpg"},{name:"Olympia",imgUrl:"http://upload.wikimedia.org/wikipedia/commons/b/b7/Olympia,_Washington_-_Capital_Lake_Boardwalk.jpg"}]}]),apartmentFinder.controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),apartmentFinder.controller("ApartmentCtrl",["$scope","$routeParams","Apartment",function(a,b,c){var d,e;a.cityName=b.cityName,c.query({cityName:a.cityName},function(b){for(a.apartmentMarkers=[],a.apartmentList=b,a.apartmentChunk=_.chunk(a.apartmentList,9),a.totalItems=a.apartmentList.length,a.currentPage=1,a.currentApartments=a.apartmentChunk[a.currentPage],a.maxSize=5,a.map={center:{latitude:47.6,longitude:-122.3},zoom:10},e=0;e<a.currentApartments.length;e++)d=new google.maps.Marker({id:a.currentApartments[e].id,latitude:a.currentApartments[e].latitude,longitude:a.currentApartments[e].longitude,title:a.currentApartments[e].title,price:a.currentApartments[e].price,thumbnail:a.currentApartments[e].thumbnail,show:!1}),d.onClick=function(){console.log("Clicked!"),d.show=!d.show},a.apartmentMarkers.push(d);a.pageChanged=function(){for(a.currentApartments=a.apartmentChunk[a.currentPage],a.apartmentMarkers=[],e=0;e<a.currentApartments.length;e++)d=new google.maps.Marker({id:a.currentApartments[e].id,latitude:a.currentApartments[e].latitude,longitude:a.currentApartments[e].longitude,title:a.currentApartments[e].title,price:a.currentApartments[e].price,thumbnail:a.currentApartments[e].thumbnail,show:!1}),d.onClick=function(){console.log("Clicked!"),d.show=!d.show},a.apartmentMarkers.push(d)}})}]),apartmentFinder.controller("OneApartmentCtrl",["$scope","$routeParams","oneApartment",function(a,b,c){a.apartmentId=b.id,c.get({id:a.apartmentId},function(b){a.singleApartment=b})}]),apartmentFinder.factory("Apartment",["$resource",function(a){return a("http://spidey.zyring.com/cities/:cityName")}]),apartmentFinder.factory("oneApartment",["$resource",function(a){return a("http://spidey.zyring.com/apartments/:id")}]);