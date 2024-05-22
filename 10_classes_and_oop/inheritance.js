class User{
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email, password){
        super(username); // here we use "SUPER" keyword for accecc the "usename" from the another class mean its parents class thats why we use super keyword---------> but we have not availble this syntax then we have to follow the "call" rule where we use call and pass "this" , and "usename" as parameter 

        //now behin the this "super" keyword works like that ...> this first goto the class which is extended then find consctrutor then automatically assing the username into this
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("anupam", "anupam@teacher.com" ,"543")
chai.addCourse();

const masalachai = new User("masalchai")
masalachai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);