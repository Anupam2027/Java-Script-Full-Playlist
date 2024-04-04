//reduce method
const myNums=[5,7,64,8,5,6,3]

//using normal function
const myTotal= myNums.reduce(function (accumulator,currentValue){
    console.log(`accumulator:${accumulator} and cuurent value:${currentValue}`);
    return accumulator+currentValue;
},1)
console.log(myTotal);

//using arrow function
const myTotal1=myNums.reduce((acc,currval)=> (acc+currval),7)
console.log(myTotal1);

//another example
const shoppingCart=[
    {
        item:"js course",
        price:1999
    },
    {
        item:"py course",
        price:999
    },
    {
        item:"web dev course",
        price:1999
    },
    {
        item:"mobile dev course",
        price:6999
    },
    {
        item:"data science course",
        price:12999
    }
]

const myTotalPrice= shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(myTotalPrice);