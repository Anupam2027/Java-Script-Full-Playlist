const userEmail= "A@anupam.ai"
const userEmail1= []
if(userEmail)
{
    console.log("got user emial");
} else
{
    console.log("don't have user email");
}

//falsy value :-
//false,0,-0,BigInt-->0n,"",null,undefined,NaN
//truthy value:-
//"0",'false'," ",[],{},function(){}-->empty function
//note:- These truthy and falsy value is used in time of check conditions


//how to check empty Array
if(userEmail1.length === 0)
{
    console.log("Array is empty");
}

const obj={}
if(Object.keys(obj).length === 0){
    console.log("Object os empty");
}


//interview question-->keep in mind and this is run on browser
/*false == 0 --->true
false == '' --->true
0 == ''----> true */



//new operator
//Nullish Coalescing operator (??): null undefined
let val1;
//val1=5 ?? 10 -->5
// val1= null ?? 10 -->10
// val1= undefined ?? 15 --->15
// val1 = null ?? 60 ?? 70 -->60
val1 = null ?? 59 ?? 70 
console.log(val1);


//Terniary operator
//Syntax ---> condition ? true : false
const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");