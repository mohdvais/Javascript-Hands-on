console.log('Problem 7 Javascript program to convert kilometers to miles');
// 1 kilometer is equal to 0.621371 miles.

const kilometers = prompt('Entervalue in kilometers: ')

//conversion factor
const factor = 0.621371

//calculate miles
const miles = kilometers * factor;
console.log(`${kilometers} kilometers is equal to ${miles} miles`);