console.log('hello');  

let marks =[34,24,14,54,44];
const fruits = ['Orange','Apple','Banana','papaya'];
const mixed =['str',86,[3,5,6]];

const arr = new Array(23,13,21,'Orange');
console.log(arr);
console.log(marks);
console.log(mixed);
console.log(Array.isArray('dfdf'));
arr[0] = 'harry';
console.log(arr);


let value = marks.indexOf(34);
console.log(value);
marks.push(3333);
marks.unshift(10009);
marks.pop()
marks.shift();
marks.splice(0,2);
marks.reverse();
let marks2 =[1,2,3,4,5,6,7];
marks = marks.concat(marks2);

console.log(marks);