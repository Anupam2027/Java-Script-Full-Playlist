//for of loop
//syntax -->
// for (const iterator of object) {
    
// }
const arr= [1,6,5,3,5,6]
for (const num of arr) {
   console.log(`array value ares :${num}`); 
}
const greetings="Hello anupam!"
for (const greet of greetings) {
    console.log(`${greet}`);
}

//maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of america ")
map.set('FR',"France")
console.log(map);

//for of on map
for (const key of map) {
    console.log(key);              //here its will be gives answer in arrays form for all keys
}
for (const [key,value] of map) {         //this is syntax for map to print keys value
    console.log(key,":-",value);              //here we wll "de-structuring of array"
}

//for of on objects
const myobj={
    'game1':"KBC",
    'game2':"LODO"
}
for (const [key,value] of myobj) {
    //console.log(key,":-",value);               //so there error that "object is not iterable", we cannot perform for of on object
}
