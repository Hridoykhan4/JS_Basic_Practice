// const a = (first, ...num) => num;
// // console.log(a(23, 3, 5));
// // rest operator

// const add = (a = 3, b = 5) => a + b; // a = 3 + 10 = 13 , b = 5 .. If I don't assign b = 5 here it will return NAN ... Coz a = 13 is ok, but b would be undefined

// console.log(add(3 + 10));


// const a = function(a = 4) {
//     return 4 + a
// }

// console.log(a(10));


//  Template string
// const age = 30
// const info = `Kamal is ${age} years old`
// console.log(info);

// const a = {
//     name: 'Kamal',
//     age: 23,
//     prof: 'Driver',
//     school: 'Kamal Int. School'
// }
// // const {name, age: old} = a
// // console.log(old);
// const {name, ...other} = a
// // rest example
// console.log(other);

const arr = [2,5,6]
const newArr = [...arr, 10]
// arr.push(10, 100)
// console.log(newArr);

console.log(arr.map(a => a * 2));