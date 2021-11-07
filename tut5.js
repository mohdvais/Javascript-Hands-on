//type conversion and type coercion
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
console.log(myVar , (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));


let date = String(new Date());
console.log (date, (typeof date));

let arr = [1,2,3,4,5,6,7]
console.log(arr, (typeof arr)); 

let i = new Date(); 
console.log(i.toString());

let stri = Number("3434");
console.log(stri,(typeof stri));

let num1=5;
let num2 =10;
// console.log(num1 + num2);

const sum = num1 + num2;

//display the sum
console.log('The sum of ' + num1 + ' and ' +num2 + ' is ' +sum );

