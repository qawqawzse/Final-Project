app.controller("loginCtrl", function($scope,userService, $http, $location ) {

var invalidCredentails=false;


// calling user service to check if there is a match between pwd and email to one of the users

$scope.checkUser= function(email,pwd) {    
    
    userService.loginCheck(email,pwd).then(function(successLogin) {
        if (successLogin) {
            $location.path("/messages");
        } else {
            
            $scope.invalidCredentails = true;
        }
    })
                    
}

$scope.user = {};

$scope.user.img="assets/manOwner.png"
  


});    



