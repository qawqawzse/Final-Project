app.controller("messagesCtrl", function($scope, messageService,userService, $http, $location ) {

//    retrieving users from userService
   
$scope.users=[];
    
    userService.getUsers().then(function() {
    $scope.users = userService.users;
});

//active user innitialization 
$scope.activeUser={};

$scope.activeUser=userService.loggedIn();

//demo user function - should be replaced and routed to login when no user is looged !!!

if ($scope.activeUser===null){
    
    $scope.activeUser= {
        
        id: "0",
        role: "tenant",
        email: "demo@gmail.com",
        password: "dan123",
        fname: "Demo-user",
        lname: "Demofamily",
        building: "1",
        appartment: "13",
        img:"assets/manTenant.png",
        data: ""

    }
   
}

console.log($scope.activeUser);


//calling json file data

$scope.messages=[];

messageService.getData().then(function() {
    $scope.messages = messageService.messages;
});



//retrieving new message from ui when user clicks submit

$scope.msgSubmit=function(message){

    messageService.newMessage(message);
   
}    


$scope.delete=function(message){

    var id=$scope.messages.indexOf(message);
    messageService.deleteMessage(id);
    console.log(id)
}



//update function not working 

$scope.update=function(message){

    var id=$scope.messages.indexOf(message);
    messageService.updateMessage(message, id);
    console.log(id);
    console.log(message)    
}

//saving comment input into the message object

$scope.comment=function(index, text){

    messageService.newComment($scope.activeUser.fname+" "+$scope.activeUser.lname , index, text);

    
}

//search messages 



   
});