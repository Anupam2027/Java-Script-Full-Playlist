//map ---> in map ,this is work same as filter but their have no any condtions 

const myNumber =[1,2,3,4,5,6,7,8,9,9,0]
const a=myNumber.map((nums) => {
    return nums+10;
})
console.log(a);

//chaining ---where we use multiple method "map",filter etc but all method pass their value in next ,method
const number= myNumber.map((num) => num*10).map((num)=>num +1).filter((num)=> num >=60)
console.log(number);