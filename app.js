var app=angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/users/users.html",
        controller : "userCtrl"
    
    })
    
    .when("/messages", {
        templateUrl : "app/messages/messages.html",
        controller : "messagesCtrl"    
        
    
    
    
    });
});
