let name="anupam";
const repoCount=100;
console.log(name+repoCount+" values"); //concatition --->this is old process we can't use this
//we will use string interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`); //string interpolation ,it will use in backend so keep practice this

//string decleration other method
const gameName= new String('anupam-am-com'); //here string is actual a object where we see their key value pairs
console.log(gameName[5]); //accesing key value
console.log(gameName.__proto__); //this is use for show all prototypes of string , -->here show empty braces by the function are present here this this actually show in console but we can access method directly
console.log(gameName.length); //this is return all string total ,this is properti of string , size
console.log(gameName.toUpperCase()); //this function is use to convert string into uppercase
console.log(gameName.charAt(3)); //this function is use for in which index which letter is present and pass index no 
console.log(gameName.indexOf('p')); //this is use for which letter is which position or index
const newString=gameName.substring(0,3); //gives the substring of any string and gives the parameter start index last index upto we want to print and last no is not include
console.log(newString);
const anotherString=gameName.slice(-2,4);
console.log(anotherString)
const newstringOne="      anupam     ";
console.log(newstringOne);
console.log(newstringOne.trim()); //trim the unneccery thing space aur tabs
//#replace
let url="https://anupam.com/anupam20%mishra"
console.log(url.replace('20%','_'));
//#includes
console.log(url.includes("anupam"));
console.log(gameName.split('-')); //we can convert string in array ......using "split function --arge=seperstor,or limit"