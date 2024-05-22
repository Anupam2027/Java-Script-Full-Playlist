// let myName = "Anupam        "
// console.log(myName.trim().length);
// let myChannel = "chai     "
let myHero = ["thor","spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getspiderPower: function (){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// Object.create()  //crete() ---> these function are called factory function which is bydefault milta h

Object.prototype.Anupam = function (){
    console.log(`Anupam is present in all Object`);  //here , we want  do that , we inject Anupam() function in all  object , array , function , string ---- so we easily access the top level hirarchy thats why we find is all Anupam () function .......so we can add a new property
}



//now here we do another thing means test that if we inject a new property in array , so can this object is access ?....let check

Array.prototype.heyAnupam = function (){
    console.log(`Anupam says hello`);
}

heroPower.Anupam();
myHero.Anupam();
myHero.heyAnupam();
// heroPower.heyAnupam();

//so we see that we can not access the "heyanupam" only in array not other string and object......


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
