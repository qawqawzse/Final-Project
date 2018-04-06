app.controller("messagesCtrl", function($scope, messageService, $http, $location ) {


//calling json file data

$scope.messages=[];

messageService.getData().then(function() {
    $scope.messages = messageService.messages;
});


//retrieving new message from ui when user clicks submit

$scope.msgSubmit=function(message){

    messageService.newMessage(message);
   
}    





    //     function Message(message){

//         this.createdBy=message.createdBy;
//         this.createdAt=message.createdAt;
//         this.title=message.title;
//         this.details=message.details;
//         this.priority=message.priority;
//         this.comments=message.comments;

//     }

// $scope.messages=[];



// $scope.msgSubmit=function(message){

//     message.createdAt=new Date();

//     message.createdBy="TBD";

//     var x=new Message(message);

//     $scope.messages.push(x);

//     console.log($scope.messages);  

// }
   
});