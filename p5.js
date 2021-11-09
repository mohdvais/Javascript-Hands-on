// console.log('javascript program to swap two variables');
// //using a temporary variable
// let a = prompt("Enter the first variable: ");
// let b = prompt ('Enter the second variable: ');

// //create a temporary variable
// let temp;
// //swap variable
// temp = a;
// a = b;
// b = temp;


// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// // using es6 (es2015) destructuring assignment
// let a = prompt ('Enter the first variable: ');
// let b = prompt ('Enter the second variable: ');

// [a, b]= [b, a];
// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

//using arithmetic operators
let a = parseInt(prompt ('Enter the first variable: '));
let b = parseInt(prompt ('Enter the second variable: '));

//additionn and subtraction operator
a = a+b;//a=2+3=5
b = a-b;//b=5-3=2
a = a-b;//a=5-2=3

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
