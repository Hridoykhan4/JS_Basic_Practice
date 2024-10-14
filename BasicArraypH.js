// let numbers =  [10, 20, 30, 40, 50];

// Array length,index,get,set
const number =  [10, 20, 30, 100, 40, 50];
// console.log(number.length)

// To get the value of an array elements
// console.log(number[3])

// To get the index 
// console.log(number.indexOf(20));

// We can store in a variable
/* const fourth = number[3];
console.log(fourth) */

// Set an element
number[2] = 999;
// console.log(number);


// Push,Pop
const number1 = [12, 87, 99, 22];
number1.push(233)
console.log(number1);
console.log(number1.pop())
console.log(number1)

const friends = ['Kamal', 'Salam', 'Jamal'];
friends.push('Khailam');
console.log(friends);
let store = friends.pop()
console.log(store)
console.log(friends)

// Shift Unshift
friends.shift();
console.log(friends);

friends.unshift('Kamal');
console.log(friends)