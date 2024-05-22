//object literals ------>   "{}"
const user ={
    userName:"Anupam",
    loggedInCount: 6,
    sigin : true,
    getuserDetails: function(){
        //console.log("Got userdetails from DB");
        //console.log(`username:${this.userName}`);
        console.log(this);
    }
}
console.log(user.userName);
console.log(user.getuserDetails());
console.log(this);

//constructor
function User (userName,loggedInCount,sigin){
     this.userName = userName;
     this.loggedInCount = loggedInCount;
     this.sigin = sigin;
      //return this;
     this.greeting = function (){
        console.log(`username ${this.userName}`);
     }
}
 const userone = new User("anu",5,true);     //constructor
 const usertwo = new User("Anupam",8,false);  //constructor 
 console.log(userone.constructor);   //constructor method is give the own references like here function which name is User
 console.log(usertwo);
