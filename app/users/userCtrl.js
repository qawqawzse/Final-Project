app.controller("userCtrl", function($scope, userService, $http, $location ) {

    $scope.users=[];

    userService.getUsers().then(function() {
        $scope.users = userService.users;
    });





});    