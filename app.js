var app=angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/login/login.html",
        controller : "loginCtrl"
     
        
        
    });
});
