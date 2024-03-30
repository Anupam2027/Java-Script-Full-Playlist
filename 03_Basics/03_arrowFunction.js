//"This" keyword  ---> this is refer to current context(object)
//1) alone "this" always refer the global object 


//interview question --->1)if we print "this" in "node" then it will  be give the empty object -->{}
//2) but if we print "this" in browser then it will be "gives window object"

//1)in node environment this will be always refer to a "empty object" because there have no any object
//2)in browser environment this always refer to "window object" beacuse in browser window is a "global object"
const user={
    userName : "Anupam",
    price: 0,
    welcomeMessage : function (){
        console.log(`${this.userName}, welcome to the website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.userName="sonu"
user.welcomeMessage()
console.log(this);

function chai(){
    let  username="anupam"
    console.log(this.username);
}
chai()



//here we see that we print this in function in node environment then  some show but we access current context in function using this keyword it does'not work .....so this only work in object

const chai1= function(){
    let  username="anupam"
    console.log(this.username);
    console.log(this);
}
chai1()

/*******Arrow function ********/
const chai2= () => {  //syntax of arrow function 
    let  username="anupam"
    console.log(this);
    console.log(this.username);
}
chai2()

//here note that this is work in normal function in node environment but not in arrow function but in both function "this" keyword not access to current context

const addTwo= (num1,num2) => { //syntax of arrow function (this is called explicit return)
    return num1+num2;
} 
console.log(addTwo(6,8));

//emplicit return ---->where we d'not  use return keyword and remove braces "{}" and use parenthesis "()"
//if we use braces "{}" in arrow function then write return keyword but not in parenthesis "()"
// const addTwo1= (num1,num2) => num1+num2
const addTwo1= (num1,num2) => (num1+num2)  // (inplicit return)
console.log(addTwo1(6,8));
const addTwo3= (num1,num2) => ({userName:"anupam"})    //object declearation in arrow function
console.log(addTwo3());
