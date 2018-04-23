app.controller("ctrl", function($scope, userService, $location) {


$scope.isHomeScreen= function() {

    if ($location.path("/")){
        
        return true;
    }
 }    

   
});
