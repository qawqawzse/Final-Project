app.controller("ctrl", function($scope, userService, $location) {


    $scope.activeUser={};


$scope.isHomeScreen= function() {

    if ($location.path() === "/"){
        
        return true;
    }
 }    


 $scope.getActiveUserImage=function(){

    $scope.activeUser=userService.loggedIn();

    return $scope.activeUser.img;
    
 }

 $scope.getActiveUserName=function(){

    $scope.activeUser=userService.loggedIn();
    
        return $scope.activeUser.fname +" "+ $scope.activeUser.lname ;
        

 }

 $scope.activeUserShow=function(){

    if($scope.activeUser!= null || undefined || false){

        return true;
    }else {
        return false;
    }
 }
   
});
