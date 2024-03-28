//function
//function defination--->whare function keyword,function name,parenthesis,braces
function saymyname(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("P");
    console.log("A");
    console.log("M");
}
//function call
saymyname(); //this is function excecution-----only "saymyname" without parenthesis is called function reference
//add two number
function addTwoNumber (num1,num2){ //here we pass "parameters"
     console.log(num1+num2);
}
addTwoNumber(6,"4") //"arguments"


function addTwoNumber (num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
const result= addTwoNumber(7,5);
console.log("Result",result);

//another function
function loginuserMessage(username="Anuapm"){ //if we do notpass any parameter then we set default value
    if(username === undefined){
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginuserMessage("Anupam")); //here interview question that ---if we does not pass any arguments then what happened?-----answer )it will be show "undefined" not NULL

//use rest operator(...)-->same as spred operator but use case different
function calculateCartPrice1(...num1){
    return num1;
}
console.log(calculateCartPrice1(567,90,34,6,7,566)); //so rest operator print the all value in a array 
function calculateCartPrice(val1,val2,...num1){//interview question ---->here we pass parameter 3 val and rest operator so what happend?---->answer)val all value not print and other rest operator value show
    return num1;
}
console.log(calculateCartPrice(567,90,34,6,7,566));


//object in function
const user={
    name:"anupam",
    price:5677
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and price ${anyobject.price}`);
}
//handleobject(user);
handleobject({
    name:"aam",
    price:776
})


//array in function
const myarray=[56,87,34,67]
function returnSecondvalue(anyarray){
    return anyarray[1];
}
//console.log(returnSecondvalue(myarray));
console.log(returnSecondvalue([344,788,554,3,5]));
