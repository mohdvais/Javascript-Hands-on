const name ='mohd';
const greeting = 'Good Morning';
console.log (greeting + ' '+ name);


// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html.indexof('t'));
// console.log(html.lastIndexof('t'));
// console.log(html.charAt(3));
// console.log(html.endswith('t'));
// console.log(html.includes('fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0,4));
// console.log(html.split('>'));
// console.log(html.replace('this','it'));

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let  myHtml =`hello ${name} <h1> This is heading </h1>
<p> you like ${fruit1} and ${fruit2}`

document.body.innerHTML = myHtml;