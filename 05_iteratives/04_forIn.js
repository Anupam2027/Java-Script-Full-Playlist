//loop using on object ----we will use "for in" loop
//"for in" use for object and other thing
const myobject ={
    js:"java script",
    cpp:"c++",
    DBMS:"Data base management system"
}
for (const key in myobject) {
    console.log(`${key} shortcut for ${myobject[key]}`);
}

//use on array
const programming =["js","cpp","java","py","rb"]
for (const key in programming) {
    console.log(programming[key]); //values
}

for (const key in programming) {
    console.log(key);     //keys
}

//map
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of america ")
map.set('FR',"France")
console.log(map);
for (const key in map) {
    console.log(key);
}