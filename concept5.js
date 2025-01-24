/* const x = "hello       ";
const y = '           hElLo';

if(x.trim().toLowerCase() === y.trim().toLowerCase()){
    console.log('Same');
}

else{
    console.log('Different');
}
 */
// const nam = "Mama, I am in a very jolly mood today";
// console.log(nam.includes('jolly'))

let bro = "Hello World";
let brother = "hello";

// console.log(bro.includes(brother));
// console.log(bro.toLowerCase().includes(brother.toLowerCase()));

// const x = 'Hello  '
// const y = '   hello';

// if(x.trim().toLowerCase() === y.trim().toLowerCase()){
//     console.log('Same');
// }

// else{
//     console.log('Not Same');
// }

// Array Methods
// const x = "My name is Hero";
// const words = x.split(' ');
// console.log(words);
// const y = words.join('/');
// console.log(y)

// Object Part
// const myPet = {
//   name: "Travis",
//   age: 2,
//   isMale: true,
//   food: "Fish",
//   color: "white",
//   species: "Persian",
//   "is married": false
// };

// const b = 'name';
// console.log(myPet[b])

// delete myPet.food

// myPet.sound = 'mew mew'
// console.log(myPet)

// const petfood = myPet.food;
// console.log(petfood)

// const petFood = myPet["food"];
// console.log(petFood)
// myPet["is married"] = true
// console.log(myPet["is married"])

// const petMeal = 'food';
// console.log(myPet[petMeal])

// const myPet = {
//     name: "Travis",
//     age: 2,
//     isMale: true,
//     food: "Fish",
//     color: "white",
//     species: "Persian",
//     "is married": false
//   };

//   for(let key in myPet){
//     console.log(key,':',myPet[key]);
//   }

//   const keys = Object.keys(myPet);
//   console.log(keys);

//   for (const key of keys) {
//      console.log(key, ':', myPet[key]);
//   }

//   const students = {
//     name: {
//         firstName: 'Toyob',
//         middleName: 'Uddin',
//         lastName: 'Hridoy'
//     },
//     roll: 34,
//     subjects: ["Bangla", "English"],
//     isMale: true
//   };

//   console.log(students.name.middleName);
//   console.log(students.subjects[1])

//   Template JS
const myPet = {
  name: "Travis",
  age: 2,
  isMale: true,
  food: "Fish",
  color: "white",
  species: "Persian",
};

// My pet name is Travis.His favourite food is Fish.and his color is white
// const sentence = "My pet name is "+ myPet.name + ". His favourite food is "+myPet.food+". and his color is "+myPet.color;
// console.log(sentence)

const sentence = `My pet name is ${myPet.name}.His favorite food is ${myPet.food}.and his color is ${myPet.color}`;
// console.log(sentence)
