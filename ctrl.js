app.controller("ctrl", function($scope) {

    function Message(message){

        this.createdBy=message.createdBy;
        this.createdAt=message.createdAt;
        this.title=message.title;
        this.details=message.details;
        this.priority=message.priority;
        this.comments=message.comments;

    }

$scope.messages=[];



$scope.msgSubmit=function(message){

    message.createdAt=new Date();

    message.createdBy="TBD";

    var x=new Message(message);

    $scope.messages.push(x);

    console.log($scope.messages);  

}
   
});
