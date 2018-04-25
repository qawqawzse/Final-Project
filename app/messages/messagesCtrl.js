app.controller("messagesCtrl", function($scope, messageService,userService, $http, $location ) {

//    retrieving users from userService
   
$scope.users=[];
    
    userService.getUsers().then(function() {
    $scope.users = userService.users;
});


//active user innitialization 
$scope.activeUser={};
$scope.selectedMessage = {};
$scope.selectedComment={};
$scope.activeUser=userService.loggedIn();
$scope.authorPhoto; 
$scope.authorPhotoComment;
$scope.message={};
$scope.message.priority="High";
$scope.sortParam="createdAt";

// unread messages counter 

$scope.counter={};
    


//demo user function - should be replaced and routed to login when no user is looged !!!

// if ($scope.activeUser===null){

    
    
//     // demo user 
    
//     // $scope.activeUser= {
        
//     //     id: "0",
//     //     role: "tenant",
//     //     email: "demo@gmail.com",
//     //     password: "dan123",
//     //     fname: "Demo-user",
//     //     lname: "Demofamily",
//     //     building: "1",
//     //     appartment: "13",
//     //     img:"assets/manTenant.png",
//     //     data: ""

//     // }
   
// }

console.log($scope.activeUser);


//calling json file data

$scope.messages=[];

messageService.getData().then(function() {
    $scope.messages = messageService.messages;
});



//retrieving new message from ui when user clicks submit

$scope.msgSubmit=function(message){

    messageService.newMessage($scope.activeUser, message);
   
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

// $scope.comment=function(index, text){
//     console.log( index, text)
//     messageService.newComment($scope.activeUser.fname+" "+$scope.activeUser.lname , index, text);

    
// }

$scope.newComment=function(message, text){
        comment={};
        comment.text=text;
        comment.createdBy=$scope.activeUser.fname + " " + $scope.activeUser.lname;
        comment.createdAt=new Date();
        message.comments.push(comment);
        
        
       
}

$scope.updateMsg = function (message) {
    $scope.selectedMessage = message;
}


// retrieving user image 

$scope.userImg=function(message){

    var userName=message.createdBy;    
    var author="";



    for(i=0; i<$scope.users.length; i++){

        if(userName===$scope.users[i].fname +" "+ $scope.users[i].lname){
            author=$scope.users[i];
            
        }

    }

    message.authorPhoto=author.img;    
    console.log("userPhoto");
    console.log($scope.authorPhoto);
    console.log("user image found")

     
    
    if ($scope.authorPhoto==undefined || $scope.authorPhoto==""){

        authorPhoto="assets/avatar.jpg";

        
    }
    
    return true;
}


// retrieving author photo for comments 

$scope.commentUserImg=function(comment){

    var userName=comment.createdBy;    
    var author="";

    console.log(userName + "comment user")

    for(i=0; i<$scope.users.length; i++){

        if(userName===$scope.users[i].fname +" "+ $scope.users[i].lname){
            author=$scope.users[i];
        }

    }

    comment.authorPhotoComment=author.img;

    console.log($scope.authorPhotoComment)
    console.log(author.img)
   
    
    if ($scope.authorPhotoComment==undefined || $scope.authorPhotoComment==""){

        authorPhotoComment="assets/avatar.jpg";

        
    }
    
    return true;
}

// retrieving message read/unread status 

$scope.isRead=function(message){

    if (message.isRead==false){

        message.isRead=true;
    }
}

// read/unread messages counter for page tabs  

$scope.counter=function (){
    
    $scope.counter.all=0;
    $scope.counter.critical=0;
    $scope.counter.high=0;
    $scope.counter.medium=0;
    $scope.counter.low=0;

    for (i=0; i<$scope.messages.length; i++){
        
        if ($scope.messages[i].isRead==false){
            
            $scope.counter.all=$scope.counter.all+1;

            
            if($scope.messages[i].priority==="Critical"){
                
                $scope.counter.critical=$scope.counter.critical+1;
            }

            if($scope.messages[i].priority==="High"){
                
                $scope.counter.high=$scope.counter.high+1;
            }

            if($scope.messages[i].priority==="Medium"){
                
                $scope.counter.medium=$scope.counter.medium+1;
            }

            if($scope.messages[i].priority==="Low"){
                
                $scope.counter.low=$scope.counter.low+1;
            }

            
        } else{
            
            

        }  
    
    }
    
    return true;
    
}

console.log($scope.counter)



   
});