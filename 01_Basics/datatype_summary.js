//data type -->2 types  1)premitive .string .undefined .null .boolean .Number .symbol .BigInt  2)non-primitive(reference)
const score=100 //Number
const scoreValu=504.99 //Number
const isLoggedIn= true //boolean
const outsideTemp =null //null
let userEmail; //undefined
let userName="Anupam" //string
const Id=Symbol('234')
const anotherId=Symbol('234')
console.log(Id ===anotherId )
const bigNumber=4348568949393n
//non primitive data type
//array ,objects,functions
const heros=["shakatiman","naagraj","doga"]; //array
//object
let myobj={      
    name:"Anupam",
    age:22,
}
//function
let myFunction=function (){
    console.log("Hello Everyone");
}
//console.log(myFunction());
console.log(typeof(score));//number
console.log(typeof(scoreValu));//number
console.log(typeof(isLoggedIn));//boolean
console.log(typeof(outsideTemp));//null--object ----very very important
console.log(typeof(userEmail)); //undefined
console.log(typeof(userName)); //string
console.log(typeof(Id)); //symbol
console.log(typeof(anotherId)); //symbol
console.log(typeof(myobj)); //object
console.log(typeof(myFunction)); //function ----but this is called "function object"