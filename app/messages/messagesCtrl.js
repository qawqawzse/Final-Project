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


$scope.delete=function(message){

    var id=$scope.messages.indexOf(message);
    messageService.deleteMessage(id);
    console.log(id)
}

$scope.update=function(message){

    var id=$scope.messages.indexOf(message);
    messageService.updateMessage(message,id);
    
}



   
});