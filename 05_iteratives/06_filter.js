//for some special things
const coding= ["js","py","cpp","rb"]
const value = coding.forEach((item)=>{
   // console.log(item);
    return item;  //so ,forEach --return nothing 
})
console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9,0]

const newNums = myNums.filter((num) => num > 4 )  //here use inplicit arrow function  so does not require return keyword and parenthesis

//in filter ,we pass callback function which access every value so ,first we pass value which access each value and then gives conditions
console.log(newNums);
const newNums1 = myNums.filter((num) => {
   return num>5         //here use explicit arrow function  so here required return keyword and braces
})
console.log(newNums1);

//using for each
const mynew=[]
myNums.forEach((num)=> {
    if (num >5 ) {
       mynew.push(num) 
    }
})
console.log(mynew);

//filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);