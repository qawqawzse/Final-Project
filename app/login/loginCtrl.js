app.controller("loginCtrl", function($scope,userService, $http, $location ) {

var invalidCredentails=false;

$scope.users=[];
    
    userService.getUsers().then(function() {
    $scope.users = userService.users;
});

$scope.newOwner=function(user){

    userService.newOwner(user);

    console.log(user)

}

// calling user service to check if there is a match between pwd and email to one of the users

$scope.checkUser= function(email,pwd) {    
    
    userService.loginCheck(email,pwd).then(function(successLogin) {
        if (successLogin) {
            var activeUser=userService.loggedIn()
            if (activeUser.role=="tenant"){
                $location.path("/messages");
            }else{
                $location.path("/users");
            }
            
            console.log(successLogin)
        } else {
            
            $scope.invalidCredentails = true;
        }
    })
                    
}

// Ghost photo for homeowners in registration form
$scope.user = {};

$scope.user.img="assets/manOwner.png"

// creating new homeowner and community (new user)


  


});    



