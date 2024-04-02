//todat we learn about control statement
//if
//syntax---> if(condition){}
const isLoggedIn = false; //"=" -- this is assingment operator
const temperature = 41;
if(temperature === "41")
{
  console.log("very hot");
}
else
{
    console.log("normal temperature");
}
//some logic operators ---> <,>,<=,>=,==,!=,===,!==
const score=200
if(score >100)
{
    let power= "fly"
    console.log(`user power: ${power}`);
}
// console.log(power);
const balance =9000;
// if(balance) console.log(balance); //this is "emplicit scope"
// if(balance) console.log(balance),console.log("test"),console.log("do not do this type code in js");
if (balance <600) {
    console.log("no");
} else if (balance <700) {
    console.log("no");
    
} else if (balance <899) {
    console.log("no");
    
} else
{
    console.log("yes");

}

const userLoggedIn =true
const debitCard =true
const LoggedInFromGoogle =true
const LoggedInFromEmail =true
if(userLoggedIn && debitCard && 2==2)
{
    console.log("Allowed");
}
if(LoggedInFromEmail || LoggedInFromGoogle || 2==2)
{
    console.log("allowed");
}