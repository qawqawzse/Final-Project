app.factory("userService", function ($http, $log, $q) {
    
    var users=[];
    
    function User(user) {
        this.id = user.id;
        this.role = user.role;
        this.email = user.email;
        this.password = user.password;
        this.fname = user.fname;
        this.lname = user.lname;
        this.building = user.building;
        this.appartment = user.appartment;
        this.img = user.img;
        this.data = user.data;
    }


    
       
 //getting json file and constructing the objects into the array 

  
    function getUsers() {
    
        var async = $q.defer();
        
            $http.get('app/users/users.json').then(function(response) {
        
              for(i=0; i<response.data.length; i++){
              
                var user = response.data[i];
        
                var x=new User(user);
              
                messages.push(x); 
        
                console.log(user);
        
              }
        
        async.resolve();
        
        
            }, function(response) {
        
        
              async.reject();
        
            });
            
        
        return async.promise;
        console.log(users);
        
    }


   
//new message creation from UI 

    function newUser(user){

        console.log(user)

        user.id=user.id+1;
        
        var x=new User(user);

        users.push(x);

        console.log(messages);  

    }

    


    function loginCheck(email,pwd) {
        
        for(i=0; i<users.length; i++){
            
            if (email===user.email && pwd===user.password){

                return user.id;

            }else{

                return nomatch;
            }

        }
        
    }



return{

    users: users,
    getUsers:getUsers,
    newUser:newUser,
    loginCheck:loginCheck,

}



});    