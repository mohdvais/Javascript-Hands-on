console.log("Loop Hands-on")
for(let i=0; i<100;i++)
{
    console.log(i)
}
let j=1;
while(j<100){
    console.log(j);
    j++;
}


let k = 2;
do{
    if (k ===5){
        k++;
        // break;
        continue;
    }
    console.log(k + 1);
    k++;
}while(k < 10);
console.log('done')

let arr = [2,3,1,4,5,6];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
})

console.log('done');



let obj ={
    name: 'Daniyal',
    age:22,
    type: 'Dangerous programmer',
    os:'Ubuntu'
}
for (let key in obj){
    console.log(`${key} or object is ${obj[key]}`)
}