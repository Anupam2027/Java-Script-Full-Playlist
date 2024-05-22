class User{
    constructor(username){
         this.username = username
    }

    logMe(){
        console.log(`Usename ${this.username}`);
    }

    static createId(){  //yaha par ham har wo object ko access nhi dena chahte jo isse instantiate hua h isliye hamlog "static" keyword use karte h restriction
        return `123`
    }
}

const anupam = new User("Anupam")
// console.log(anupam.createId());   //here can't access because use the "static " keyword

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
console.log(iphone.createId());  //here also beacuse not access by object aur their child beacuse of "static" .....