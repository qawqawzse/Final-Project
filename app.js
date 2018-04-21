var app=angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "app/home/home.html",
        controller : "homeCtrl"
    
    })
    
    .when("/", {
        templateUrl : "app/login/login.html",
        controller : "loginCtrl"
    
    })
    
    .when("/messages", {
        templateUrl : "app/messages/messages.html",
        controller : "messagesCtrl"    
        
    })

    .when("/users", {

        templateUrl: "app/users/users.html",
        controller: "userCtrl"

    
    
    
    });
});
