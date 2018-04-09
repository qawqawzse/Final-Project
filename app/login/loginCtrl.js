app.controller("loginCtrl", function($scope,userService, $http, $location ) {

$scope.checkUser=function(email,pwd){

    var x= userService.checkUser(email,pwd);

    if (x==nomatch){

        warningFlag=true;

    }else{

        warningFlag=false;

        $location.path("/messages");
    }

}



});    