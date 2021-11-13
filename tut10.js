console.log("Function in Javascript");

function greet(name, thank){
    
        let msg = 
        `Happy Birthday ${name} How i wish I could fly to you right now
         and be with you on this special day of yours. but remember,
         my good wishes are always there with you. ${thank}`;
         return msg;
      

}
let name = "skillF";
let name2= "Rohan";

let val = greet(name,'Thanks a lot');
console.log(val);


const myobj ={
    name: 'skillf',
    game: function(){
        return 'GTA';
    }
}
console.log(myobj.game())

arr = ['fruit','vegetable','furniture'];
arr.forEach(function(element,index,array){
    console.log(element,array,index)
});


var i =234;
console.log(i);
function ui(name)
{
    var i=9;
    console.log(i)
    return `This is a ${name} ui`;
}
console.log(ui("harry"),i)