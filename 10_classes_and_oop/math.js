// console.log(Math.ceil(Math.PI));
console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,"E");  //getOwnPropertyDescriptor show the all properties defind object is show and return object 
console.log(descripter);

const chai = {
    name:'Ice Tea',
    price: 300,
    isavailable:true
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"price"));
Object.defineProperty(chai,"price",{      //here we also defind own property on object's key using Object.defineProperty(objectname, on which key, and define property) 
    writable: false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}  :  ${value}`);
    }
}
 
