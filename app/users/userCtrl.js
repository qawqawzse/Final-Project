
app.controller("userCtrl", function($scope, userService, $http, $location ) {

    $scope.users=[];

    userService.getUsers().then(function() {
        $scope.users = userService.users;
    });

    
    $scope.user={};
    $scope.user.img="assets/manOwner.png";



//creating new tenant

$scope.newTenant=function(user){

    userService.newTenant(user);
    
}


$scope.delete=function(user){

    var id=$scope.users.indexOf(user);
    userService.deleteUser(id);
    console.log(id)
}





















});    


app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);