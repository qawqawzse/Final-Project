app.factory('messageService', function($http, $q ) {

    var messages=[];
   
    function Message(message){

        this.createdBy=message.createdBy;
        this.createdAt=message.createdAt;
        this.title=message.title;
        this.details=message.details;
        this.priority=message.priority;
        this.comments=message.comments;

    }


//getting json file and constructing the objects into the array 

function getData() {
    
    var async = $q.defer();

    $http.get('app/messages/messages.json').then(function(response) {

      for(i=0; i<response.data.length; i++){
      
        var message = response.data[i];

        var x=new Message(message);
      
        messages.push(x); 

        console.log(message);

      }

      async.resolve();


    }, function(response) {


      async.reject();

    });
    

    return async.promise;
    console.log(messages);

  }




 //new message creation from UI 

function newMessage(message){

    console.log(message)
    message.createdAt=new Date();

    message.createdBy="TBD";

    var x=new Message(message);

    messages.push(x);

    console.log(messages);  

}




return {

    messages: messages,
    getData: getData,
    newMessage: newMessage


};

});   