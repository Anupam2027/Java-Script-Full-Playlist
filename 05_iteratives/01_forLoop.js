//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}

//nested loop
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value:${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(i +"*"+ j+" = "+i*j);
        
    }
}

//Array 
const myArray=["flash","batman","superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//break and continue
for (let index = 0; index <5; index++) {
    const element =index;
    console.log(element);
    if(element==5)
    {
        console.log(`detedted 5`);
        break;
    }
    
}
for (let index = 0; index <5; index++) {
    const element =index;
    console.log(element);
    if(element==5)
    {
        console.log(`detedted 5`);
        continue;
    }
   console.log(element); 
}