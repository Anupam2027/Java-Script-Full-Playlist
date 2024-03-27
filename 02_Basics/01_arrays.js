// //array
 const myArr=[1,2,3,4,5,6]
// const myHeroes=["shaktiman","naagraj",true,7]  //array declearation method-1
// const myArr2=new Array(1,5,7,3,9) //method-2
// console.log(myArr[2]);

// //array method
// myArr.push(7); //push()-->inserting element in array
// myArr.push(3);
// myArr.pop(); //deleting element from array  from last position
// myArr.unshift(6); //adding element in front of array and shift the rest  element 
// myArr.shift(); //remove the fisrt element work like reverse of unshift
// //now some method where we ask question 
// console.log(myArr.includes(6)); //element present or not
// console.log(myArr.indexOf(6));
// console.log(myArr);
// const newArr=myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

//slice,splice(interviwe question )
console.log("A",myArr); //we can print the many thing at a console
const myn1=myArr.slice(1,3) //slice()-->this method print the sub-array from the where user define and one thing that argument which (x,y),so x is contain but not print the y ....and very important thing slice does not change its original array very important line. 
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3); //splice()-->this method print the sub-array from the where user define and one thing that argument which (x,y),so x is contain but also  print the y ....and very important thing slice does change its original array very important line. 

//so difference between slice and splice that----1)slice does not include the last index but splice does 2)slice not reflect the original aaray but splice does
console.log("c",myArr);
console.log(myn2);