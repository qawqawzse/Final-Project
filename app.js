var app=angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/messages/messages.html",
        controller : "messagesCtrl"
     
        
        
    });
});
