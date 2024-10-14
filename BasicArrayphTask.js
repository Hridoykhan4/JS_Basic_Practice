// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

/* const fruits = ['Apple', 'Mango', 'Orange', 'Grapes', 'Lichi'];
console.log(fruits[3]);
fruits[2] = 'Jambura';
console.log(fruits) */

// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

/* let spots = ['Cox', 'Sajek', 'Kuakata'];
spots.push('Sundarban');
spots.push('Tanguar Hawr','Kaptai');
spots.pop();
console.log(spots) */


// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

/* let books = ['javascript', 'c', 'c++'];

if(books.includes('javascript')){
    console.log('The book "Javascript" is present in the array');
}
else{
    console.log('Not Present');
}
 */


/* 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

/* let car = [];
let names = ['Kamal', 'salam', 'jamal', 'amal'];
let boy = 'Azmol';

console.log(Array.isArray(car));
console.log(Array.isArray(names));
console.log(Array.isArray(boy)); */


/* 5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */

let name1 = ['Kamal', 'Jamal', 'Namal', 'Kalalaa'];
let roll = [1, 2, 3, 4];
console.log(name1.concat(roll))