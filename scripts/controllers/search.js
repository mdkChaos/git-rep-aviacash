angular.module("searchModule",[])
.controller("searchCtrl", function ($scope, $http) {
   $http.get("scripts/json/data.json").success(function (responseData) {
       $scope.directions = responseData;
   }) 
});