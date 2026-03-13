// const id = '7'
// console.log(id.padStart(2, 0));

// console.log((1).toString());
// console.log(String(3));

// const order = 1..toString().padStart(4, '0').substring(3)
// console.log((Number(order) + 1).toString().padStart(3, 0));

// let mangoPot = 0;
// for (let i = 1; i <= 10; i++) {
//   mangoPot += i;
// }
// console.log(mangoPot);

// let sum = 0
// for (let i = 1; i <= 10; i++) {
//     sum += 1
// }
// console.log(sum);

// const obj = {
//     name:'jamal',
//     age: 12
// }
// const keys = Object.keys(obj);
// for (let i = 0; i < keys.length ; i++) {
//     const element = keys[i];
//     console.log(element, obj[element]);
// }

// console.log(obj['name']);

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;

//     const element = obj[key];
//     console.log(element);

// }

// const friend = ['jamal', 'salam', 'kamal']
// for (const f of friend) {
//         console.log(`Welcome ${f} !! `);
// }

// Array of objects for three trainers
// const trainers = [
//   {
//     name: "John Doe",
//     age: 21,
//     specialty: "JavaScript",
//   },
//   {
//     name: "Jane Smith",
//     age: 20,
//     specialty: "Python",
//   },
//   {
//     name: "Bob Johnson",
//     age: 35,
//     specialty: "Java",
//   },
// ];

// const trainerNameOnly = trainers.reduce((arr, trainer, i) => {
//      return {
//         total: arr.total + trainer.age
//      }
// }, {total: 0})
// console.log(trainerNameOnly);

// console.log(trainers.map(t => t.name.substring(0, 9)));

// console.log(trainers.filter(t => {
//     if(t.age > 25) {
//         return t
//     }
// }));

// const over25 = []
// for (const trainer of trainers) {
//     if(trainer.age > 25) {
//         over25.push(trainer)
//     }
// }
// console.log(over25);
//
// const names = ["salam", "kalam", "jamal"];

// //#endregion
// const add = (fn) => {
//     return fn(10)
// }
// add((number = 3) => {
//     console.log(2 + number);
// })

// names.forEach((name, _, arr) => console.log(arr) )


// names.forEach(name => console.log(name))


// const arr = [2,5,6,1, 3];
// const sum = arr.reduce((total, val) => total + val, 0);
// console.log(sum);

