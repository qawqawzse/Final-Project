var app=angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/login/login.html",
        controller : "loginCtrl"
    
    })
    
    .when("/messages", {
        templateUrl : "app/messages/messages.html",
        controller : "messagesCtrl"    
        
    
    
    
    });
});
