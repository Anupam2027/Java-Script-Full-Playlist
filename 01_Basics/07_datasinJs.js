//Dates
let myDate= new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(typeof(myDate));  //interview question-->what is object-->this is "object"
//create a specific date by own--method-1
let myCreateDate=new Date(45,8,78) //--year/month/day----note here if we give day more than 31 then it is automatically calculate the next month and very important in js month index is starting from 0(means "jan")
console.log(myCreateDate);
console.log(myCreateDate.toDateString());
let myCreateDate1=new Date(45,8,78,67,86,89) //gives more parameters which treated as time some thing
console.log(myCreateDate1.toLocaleString()); 
//create a specific date by own--method-2 which (yy/mm/dd)
let myCreateDate3=new Date("2024-03-25")
console.log(myCreateDate3.toLocaleString());
let myCreateDate4=new Date("25-01-2024") //method-3 which (dd/mm/yy)
console.log(myCreateDate3.toLocaleString());
let myTimestamp=Date.now();
console.log(myTimestamp);//this time stamp is from 1970 to till now in millisecond
console.log(myCreateDate1.getTime());
//interview question convert timestamp in second
console.log(Math.floor(Date.now()/1000)); //date.now()--is converted into timestamp in "second" but in "decimal" form thats why we for remove use "Math.floor()" method


//now for some date property(method) to show specific things like only date,day,year,month ,time ,hour,min,second...etc
let newDate=new Date();
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getMonth()+1);
//string interpolation
`${newDate.getDay()} and the time`
//syntax of to pass the parameter of "tolocaleString"
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))

