//Immediately Invoked Function Expressions(IIFE)
// function chai (){
//     console.log(`DB CONNECTED`);
// }
// chai();
(function chai (){
    console.log(`DB CONNECTED`);
})();
//syntax
//()() //here first parenthesis is "function defination" and second parenthesis is "function execution" or "function call"
//iife is used for eliminate the global polution to access their veriable or method we use iife function----->defination of iife function

(function chai3() {
    console.log(`data base`);
})();

//normal function
(function chai4(){ //named iife functon
    console.log(`data base`);
})();

//arrow function
((name) => {   //without named and parametered iife
    return console.log(`data base ${name}`);
})("Anupam")


/*Note:- if we use two iife function continuosly then without using ";" in first iife function ,its does not executed see line no 13 to 15 and 17 to 18..... 
so if we have multiple iife function continuosly then we terminate the function with ";" semicolon except last iife function or not*/
