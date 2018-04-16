app.factory("userService", function ($http, $log, $q) {
    
    var activeUser = null;
    var wasEverLoaded = false;
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
        this.communityName=user.communityName;
        this.address=user.address;
        this.data = user.data;
    }


    
       
 //getting json file and constructing the objects into the array 

  
    function getUsers() {
    
        var async = $q.defer();

        if (wasEverLoaded) {
           
            async.resolve();

        } else {
        
            $http.get('app/users/users.json').then(function(response) {
        
                for(i=0; i<response.data.length; i++){
              
                    var user = response.data[i];
            
                    var x=new User(user);
                
                    users.push(x); 
            
                    console.log(user);
        
                }
        
                wasEverLoaded = true;
                async.resolve();
        
        
            }, function(response) {
            
            
                async.reject();
            
            });
        }    
        
        return async.promise;
        console.log(users);
        
    }

    //new owner creation

    function newOwner(user){
        
        console.log(user)
        
        user.id=users.length+1;
        
        user.role="owner";
             
        var x=new User(user);
        
        users.push(x);
        
        console.log(users);  
        
    }
   




    //new Tenant creation  

    function newTenant(user){

        console.log(user)

        user.id=users.length+1;

        user.role="tenant";
     
        var x=new User(user);

        users.push(x);

        console.log(users);  

    }

    
    function loginCheck(email, pwd) {
        var async = $q.defer();

        $http.get('app/users/users.json').then(
            function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i].email === email && response.data[i].password === pwd) {
                        activeUser = response.data[i];
                        async.resolve(true);
                    }                
                }
                async.resolve(false);
            }, function (response) {
                $log.error("error in getting user json: " + JSON.stringify(response));
                async.reject();
        });

        return async.promise;
    }


    function loggedIn(){

        return activeUser;

    }


    //deleting a user 

    function deleteUser(id){

        users.splice(id,1); 
    }

    // user updated function 

    function userUpdate(id, user){
        users[id].
        users[id].email = user.email;
        users[id].password = user.password;
        users[id].fname = user.fname;
        users[id].lname = user.lname;
        users[id].building = user.building;
        users[id].appartment = user.appartment;
        users[id].img = user.img;
        users[id].communityName=user.communityName;
        users[id].address=user.address;

        console.log (user);
        console.log (users[id])
    }

return{

    users: users,
    getUsers:getUsers,
    newTenant:newTenant,
    newOwner:newOwner, 
    loginCheck:loginCheck,
    loggedIn:loggedIn,
    deleteUser:deleteUser,
    userUpdate:userUpdate

}



});    