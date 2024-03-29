//scope----global and local scope
//scope is defind in {} in braces scope is work
var c=300
let r=70;  //this is global scope
if(true){
 let a=10 //these are local scope
 const b=20
 var c=30
}
//console.log(a);
//console.log(b);
console.log(c);    //so see their var is declear as local but this still executed that why we can not use "var" as varible we avoid this var in java script
console.log(r);
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//we can access globle veriable in local scope but not vise varsa

//interview question --> is scope is work same in windows and nodes??
//answer) No,scope is work differently in window and node 




/**************Nested scope****************/
function one(){
    const userName="anupam"
    function two(){
        const website="youtube"
        console.log(userName);
    }
    //console.log(website);
    //two();
}
one();
//closure-->now closure is a concept in java script that child scope is access that the parent(global scope) scope but parent scope does not access the child scope(local scope)

if (true) {
    const anotherUser="anupam"
    if (anotherUser === "anupam") {
        const webSite=" youtube"
        console.log(anotherUser+webSite);
        
    }
    //console.log(webSite);
    
}
//console.log(anotherUser);


/****************Hoisting*****************/
//here we learn two ways to declearation of "function"

//first
console.log(addOne(8)); //here function call is executed before function defination
function addOne(num1){
    return num1+1;
}

//second -----this is called "expression"
addTwo(9); //so here see one things that without function defination function call not be executed but in above function declearation we can execute the function before function defination ,so this concept is called "Hoisting"

//below function declearation is called "Hoisting" where we declear function in veriable
const addTwo = function(num2){
    return num2+2;
}
