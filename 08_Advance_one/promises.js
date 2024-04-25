//promises

//syntax--1 for promises creation
//Creation of promises
const promiseOne = new Promise(function(resolve, reject){
   //Do an async task
   //DB calls,cryptography ,network work
   setTimeout(function(){
    console.log("Async task is compeleted");
    resolve();  //for consume promises using "then()" then we have to connect then() and resolve() methods     //resolve's connection with then()
   },2000)
});

//consumed promises
promiseOne.then(function(){
    console.log("Promises consumed");
})



//syntax--2 for promises creation
new Promise(function(resolve, reject){
    setTimeout(function(){
     console.log("Async 2 task is compeleted");
     resolve();  
    },2000)
 }).then(function(){
    console.log("async 2 resolved");
})

//promises-3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usename:"chai",email:"chai@chaiaurcode.com"})    //which parameters pass in resolve() function ,this is same pass in then function
    },2000)
}).then(function(user){
    console.log(user);
})

//promises-4
const promisesFour = new Promise(function (resolve,reject){
    setTimeout(function(){
        let task=true;
        if (!task) {
            resolve({username1:"Anupam",password :"1234"})
        } else{
            reject('ERROR : Oops Something went Wrong')
        }
    },2000)
})

promisesFour
.then((user) =>{                                   //chaining
    console.log(user);
    return user.username1 
})
.then((usename ) => {
    console.log(usename );
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promises either resolved or rejected"))

const promisesFive = new Promise(function (resolve,reject){
    setTimeout(function(){
        let task=false;
        if (!task) {
            resolve({username1:"sonu",password :"1234"})
        } else{
            reject('ERROR : Oops javacript went Wrong')
        }
    },2000)
})

async function consumePromiseFive (){
    try {
        const responsed = await promisesFive
        console.log(responsed);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive(); 

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
//above and below both are dfferent
//fetch()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))