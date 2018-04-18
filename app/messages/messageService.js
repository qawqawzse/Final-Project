app.factory('messageService', function($http, $q ) {

    var wasEverLoaded = false;
    var messages=[];
   
    function Message(message){

        this.createdBy=message.createdBy;
        this.createdAt=message.createdAt;
        this.title=message.title;
        this.details=message.details;
        this.priority=message.priority;
        this.comments=message.comments;

    }

    function Comment(comment){
        this.createdBy=comment.createdBy;
        this.createdAt=comment.createdAt;
        this.text=comment.text;     
    }


//getting json file and constructing the objects into the array 

function getData() {
    
    var async = $q.defer();

    if (wasEverLoaded) {
        // Immediatly resolving the promise since cars is already available
        async.resolve();
    
    }else{    

        $http.get('app/messages/messages.json').then(function(response) {

            for(i=0; i<response.data.length; i++){
        
                var message = response.data[i];

                var x=new Message(message);
            
                messages.push(x); 

                console.log(message);

            }

            wasEverLoaded = true;
            async.resolve();

      


        }, function(response) {


        async.reject();

        });
    }

    return async.promise;
    console.log(messages);

  }




 //new message creation from UI 

function newMessage(user, message){

    console.log(message)
    
    message.createdAt=new Date();

    message.createdBy=user.fname +" "+ user.lname;

    var x=new Message(message);

    messages.push(x);

    console.log(messages);  

}


//deleting a message 

function deleteMessage(id){

       messages.splice(id,1); 
}




//message update 

function updateMessage(message,id){

    console.log(message) 
    console.log(id)
    messages[id].createdBy=message.createdBy;
    messages[id].createdAt=new Date();
    messages[id].title=message.title;
    messages[id].details=message.details;
    messages[id].priority=message.priority;
    
  
   
}

//constructing new user comment retrieved from UI.
function newComment(user,index,text){
    var comment={};
    comment.createdBy=user;
    comment.createdAt=new Date();
    comment.text=text;    
    messages[index].comments.push(comment);
    console.log(comment);
}


return {

    messages: messages,
    getData: getData,
    newMessage: newMessage,
    deleteMessage: deleteMessage,
    updateMessage: updateMessage,
    newComment: newComment

};

});   