//objects--->
//object declearation --->this is two types 1)literals 2)construction {this bpth are way to declear objects and their have no any difference between them only on "singleton"}
//which object is declear using constructions -----is called "singleton"
//singleton is  a one objects 

//object constrction
//Object.create 


//OBJECT LITERALS
//objects contain key value pair, here not any concept of indexs ,their we access element using key.and key is a string data type and we defined as " key" this is not necessary compiler(system) automatically understood and value should be any data types premitive or non premitive

const mySym=Symbol("key10"); //symbol declearation

const jsUser= { 
    name:"Anupam",
    age:16,
    "full name":"anupam mishra",
    [mySym]:"mykey1",
    email:"anupam@gmail.com" ,
    location:"kolkata",
    isLoggedIn : false,
    lastTimeLOggedin: ["wednesday","friday"],
}

//how to access the objects
//their have two ways
 //1) way using dot(.) operator and their is not given keys in string
 console.log(jsUser.email);

 //2) another ways square([]) operator and here we pass key as string becuase it is a strings thats why and always we prefer this one types for accessbility
 console.log(jsUser["age"]);
 console.log(jsUser["full name"]); //if we declear key in "" enverted coma then for access this typs key we use square [] operator their have no any change (.) operator so we prefer 2nd one accessbility
 console.log(jsUser.mySym);//this not valid beacause if we check their data types is string not symbol
 console.log(jsUser[mySym]); //this is valid for symbol but not pass in " " inverted coma
 console.log(typeof(jsUser.mySym));//string
 console.log(typeof(jsUser[mySym])) //symbol

 //Interview Question---> create a symbol and use in object as keys and print this

 //solution --> first we declear the symbol
 //then use it as key in object but declear in square bracket "[]" as key in object -->this is syntex

 //change value in object ---> using assing operator(=)
 jsUser.age="6"
 //here we lock the value which further not changed--> using "freeze()" method
// Object.freeze(jsUser)
 jsUser.age="20"
 console.log(jsUser);
 //greeting function
 jsUser.greeting =function(){
    console.log("hello everyone");
 }
 //using object reference using "this" keyword
 jsUser.greetingTwo =function(){
    console.log(`hello everyone ${ this.name}`);
 }
console.log(jsUser.greeting); //[function (anonymous)] 
console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 
