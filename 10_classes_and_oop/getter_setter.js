 class user{
    constructor(email,password){
        this.email = email    //properties
        this.password = password
    }
    
    //in get and set name of the function is same as properties syntax if we want get and set on property then

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password() {
       return `${this._password}anupam`   //this is occur error becuase we have to also add setter function only with getter this will be not executed ..so have to need setter  
    }

   set password(value){
    this._password = value   //erroe occur --- maximum call stack exceeded because of constructor and setter which set value which occur this error...so we have to change name 
   }

 }


 //here one thing observe that when we set value in setter which set original value but when we get value which return manipulated value..... so thats is the the difference if we also set value with manipulate and without manipulate

 const hitesh = new user("hi@gmail.co","rut")
 console.log(hitesh.password);
 console.log(hitesh.email);