//array properties
const coding=["js","py","cpp","rb"]
//normal function
coding.forEach(function (val){
    console.log(val);
})

//arrow function
coding.forEach((num) => {
    console.log(num);
})

//another way to pass function
function printme (item){
    console.log(item);
}
coding.forEach(printme)   //only give reference ,not executed

//we can pass multiple parameter in function in foreach loop
coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);
})

//now we take array which contain objects and we access their key's value
const mycoding =[
    {
    laguageName:"javascript",
    laguageFileName:"js"
    },
    {
    laguageName:"java",
    laguageFileName:"java"
    },
    {
    laguageName:"python",
    laguageFileName:"ps"
    }
]
mycoding.forEach((item)=>{
    console.log(item.laguageName);        //so here we can access object value from array with the help of foreach loop ,so this is very benificial 

})                  
