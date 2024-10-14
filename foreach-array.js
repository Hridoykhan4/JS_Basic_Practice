const heros = ["Allu", "Hrittik", "Jamal", "Kamal"];

// Normal function diye for eaach chalano jabe
// heros.forEach(function(heros){
//     console.log(heros)
// });


// heros.forEach( (hero) =>{
//     console.log(hero)
// })

// another system
// function nayoks(hero){
//     console.log(hero);
// };

// heros.forEach(nayoks);

const numbers = [1,2,3,4,5,6,7,8,9];

// In JavaScript, the forEach method is used to execute a provided function once for each array element. It does not return a new array or any value; it always returns undefined.
const result = numbers.forEach( (number) =>{
    console.log(number+5);
});



heros.forEach( (hero) =>{
    console.log(hero);
});