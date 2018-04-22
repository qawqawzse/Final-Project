
var app=angular.module("myApp",['ngRoute', 'googlechart']);


app.config(function($routeProvider) {
    $routeProvider
        
    .when("/", {
        templateUrl : "app/login/login.html",
        controller : "loginCtrl"
    
    })

    .when("/dashboard", {
        templateUrl : "app/dashboard/dashboard.html",
        controller : "dashboardCtrl"
    
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
