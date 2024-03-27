const marvel_hero=["thor","Iron","spiderman"]
const dc_hero=["superman","flash","batman"]
//marvel_hero.push(dc_hero);
console.log(marvel_hero);
console.log(marvel_hero[3]);
const allHeros = marvel_hero.concat(dc_hero) //concat merge two or more array and return a new array
console.log(allHeros);
const all_heros=[...marvel_hero,...dc_hero] //this is operation is sprede out which work like concat
console.log(all_heros);
const another_array=[1,2,3,[7,3,4],8,[5,3[7,8,3]]];
const real_another_array = another_array.flat(3)
console.log(real_another_array);

console.log(Array.isArray("anupam")); //isArray-->ask(is array or not)
console.log(Array.from("anupam")); //from-->creating a new array after from
console.log(Array.from({name:"Anupam"})); //here ,in object array not created because ,here we are telling that which part is make array key or value in object that why its return empty braket

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
