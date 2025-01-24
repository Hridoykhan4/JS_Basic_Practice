// Some extra
const flowers = ["golap", "joba", "beli", "jelly", "kali"];
/* const fools = flowers.join('-');
console.log(fools)

const sring = 'golap shapla jobna kamla';
const convert = sring.split('a');
console.log(convert)
console.log(Array.isArray(convert)) */

// console.log(flowers.slice(1,4));

/* for(const flower of flowers.reverse()){
    console.log(flower)
    } */

// Interesting part start here
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* let sum = 0;
for(let item of num){
    sum += item;
} */
// console.log(sum)

/* let evens = [];
let odds = [];

for(const items of num){
    if(items % 2 === 0){
        evens.push(items);
    }
    else{
        odds.push(items);
    }
}

    console.log(evens)
    console.log(odds) */

/* for(let i = 0; i < x.length; i++){
    if(x[i] === 4){
        break;
    }
    if(x[i] % 2 ===0){
        continue;
    }
    console.log(x[i])
}
 */
/*     Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red'] */

/* const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let rev = [];
for(const color of colors){
    rev.unshift(color);
}
console.log(rev); */

/* Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46] */

/* const numbers = [12, 98, 5, 41, 23, 78, 46];
let evens = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evens.push(numbers[i]);
    }
}
console.log(evens) */

// for(const number of numbers){
//     if(number % 2 === 0){
//         evens.push(number);
//     }
// }
// console.log(evens)

/* Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik' */

// let total = '';
// for (const number of numbers) {
//     total += number;
// }

// console.log(total)

/* var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';


for(const num of numbers){
    result += num;
}
console.log(result) */

/* var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
console.log(numbers.join(''));
 */

const statement = "I am a hard working person";

// console.log(statement.split(' ').reverse().join(' '))

console.log(statement.split(" ").reverse().join(" "));

/* Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I' */

/* const statement = 'I am a hard working person';
const arr = statement.split(' ');
console.log(arr.reverse().join(' '))
 */

/* const statement = 'I am a hard working person';
const arr = statement.split(' ')
console.log(arr.reverse());
console.log(arr.join(' '))

let rev = [];
statement.split(' ')
for(const stats of statement){

} */
