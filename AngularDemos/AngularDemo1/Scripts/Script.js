/// <reference path="angular.min.js" />
//creating a module
//parameters : name of module, passing array
var myApp = angular.module("myModule", []);

//create a function and assign to variable
var myController = function($scope) {
    $scope.message = "Angular JS Demo";
}
//set the controller to module
//parameters : name of controller, controller
myApp.controller("myController", myController);
//or 
myApp.controller("myController", function($scope) {
    $scope.message = "Angular JS Demo";
});