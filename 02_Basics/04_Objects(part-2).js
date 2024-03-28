//here we learn about objects creation using construction
const tinderUser = new Object();
const tinderUser1 = {};
console.log(tinderUser);

//now we add some value in object ---> using dot(.) operator
tinderUser.Id="123abc"
tinderUser.name ="sonu"
tinderUser.isLoggedIn=false
console.log(tinderUser);


//so now we add objects in object (nested objects)
const regularUser = {
    fullName:{
        userfullname:{
            firstName: "Anupam",
            middleName:"kumari",
            lastName:"Mishra",
        }
    }
}
console.log(regularUser);

//how to access them nested objects -->this is happend by dot(.)operator ...how deeply we wnat to go we adding dot(.)
console.log(regularUser.fullName);
console.log(regularUser.fullName.userfullname.middleName);

//now we merge two or more objects into one objects

const obj1={1:"a",2:"b"}
const obj2={2:"c",3:"d"}
const obj3={4:"e",5:"f"}
//first syntax
const obj4={obj1,obj2,obj3} //this is not valid
//console.log(obj4);
//second syntax
const obj5=Object.assign(obj1,obj2,obj3) //we use this syntax -----first obj1 is source other all object include in this but for save zone we include one {} ,so all objects add this braces
const obj6=Object.assign({},obj1,obj2,obj3)
console.log(obj5);
console.log(obj6);

//third syntax we use same as array--- spred off
const obj7={...obj1,...obj2,...obj3}
console.log(obj7);

//we will use this syntax for database
const users=[
    {
        id:"123abc",
        gmail:"abc@gmail.com"
    },
    {
        id:"123abc",
        gmail:"abc@gmail.com"
    },
    {
        id:"123abc",
        gmail:"abc@gmail.com"
    },
    {
        id:"123abc",
        gmail:"abc@gmail.com"
    },
]
console.log(users[1].gmail);

//now some method of objects
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //**here very interesting that when find the all keys in objects using Objects.keys()then its return answer in "array" set very inportant
console.log(Object.values(tinderUser)); //return value
console.log(Object.entries(tinderUser)); //return keys and value in pair 
console.log(tinderUser.hasOwnProperty('islogged')); //check is value present in objects or not






/************************************** De-structuring ******************************************/
const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "Hitesh"
}
//course.courseInstructor
const {courseInstructor :instructor} = course; //this is syntax of de-structure
//console.log(courseInstructor);
console.log(instructor);

//API---in json formet

//json syntax
// {
//     name:"anupam",
//     course:"js in hindi",
//     price:"free"
// }