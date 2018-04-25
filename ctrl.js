app.controller("ctrl", function($scope, $route, userService, $location) {


    $scope.activeUser={};


$scope.isHomeScreenMessages= function() {

    if ($scope.activeUser==null || $scope.activeUser==undefined){
        return false
    }else {return true;}
      
}


$scope.isHomeScreenTenants=function(){

    if ($scope.activeUser==null || $scope.activeUser==undefined){
        return false
    } else{
        if($scope.activeUser.role=="owner"){    
            return true;
        }else {
            return false;
        }
    }   

}



 $scope.getActiveUserImage=function(){

    $scope.activeUser=userService.loggedIn();

    if($scope.activeUser==null){

        return false

    } else {

        return $scope.activeUser.img;
    }
    

    
 }

 $scope.getActiveUserName=function(){

    $scope.activeUser=userService.loggedIn();

        if ($scope.activeUser==null){

            return false;
        }else{

            return $scope.activeUser.fname +" "+ $scope.activeUser.lname ;
           
        }
    
        

 }

 $scope.activeUserShow=function(){

    if($scope.activeUser!= null || undefined || false){

        return true;
    }else {
        return false;
    }
 }


$scope.logOut=function(){

    userService.logOut();
   
}

   
});
