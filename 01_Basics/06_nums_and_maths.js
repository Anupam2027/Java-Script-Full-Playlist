//***********************************numbers**************************************** */
const score=400;
console.log(score);
const balance =new Number(300);
console.log(balance);
console.log(balance.toLocaleString().toUpperCase()); //convert into string
console.log(balance.toFixed(5)); //fix decimal after point
const  otherNumber= 1115.9665;
console.log(otherNumber.toPrecision(3));
const hundred=100000000;
console.log(hundred.toLocaleString('en-In'));
//******************************************maths************************************** */
console.log(Math);
console.log(Math.abs(-8)); //convert negative value into positive
console.log(Math.round(89.987)); //round off
console.log(Math.ceil(7.8));
console.log(Math.floor(7.8));
console.log(Math.min(7.8,4,2,8,6,0));
console.log(Math.max(7.8,4,2,8,6,0));
console.log(Math.random());  //ramdomly number comes
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10));
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);