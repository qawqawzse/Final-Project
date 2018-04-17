app.controller("ctrl", function($scope, $location) {

 $scope.isHomeScreen= function() {

    if ($location.path("/")){
        
        return true;
    }
 }    

   
});
