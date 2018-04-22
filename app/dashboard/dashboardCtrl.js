
app.controller("dashboardCtrl", function($scope,userService, messageService, $http, $location ) {

// populating messages and users to scope

$scope.users=[];
$scope.messages=[];

messageService.getData().then(function() {
    $scope.messages = messageService.messages;
});

userService.getUsers().then(function() {
    $scope.users = userService.users;
});

// chart1

 /* global angular */
 
 $scope.myChartObject = {};
 
 $scope.myChartObject.type = "PieChart";
 
 $scope.onions = [
     {v: "Onions"},
     {v: 3},
 ]; 

 $scope.myChartObject.data = {"cols": [
     {id: "t", label: "Topping", type: "string"},
     {id: "s", label: "Slices", type: "number"}
 ], "rows": [
     {c: [
         {v: "Mushrooms"},
         {v: 3},
     ]},
     {c: $scope.onions},
     {c: [
         {v: "Olives"},
         {v: 31}
     ]},
     {c: [
         {v: "Zucchini"},
         {v: 1},
     ]},
     {c: [
         {v: "Pepperoni"},
         {v: 2},
     ]}
 ]};





   

});