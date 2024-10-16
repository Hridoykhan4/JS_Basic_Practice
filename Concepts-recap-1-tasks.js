/* Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */

/* function farnToCels(farn){
    return ((farn - 32) / 9) * 5
}
 */
// console.log(farnToCels(104));
/* function celsToFarn(cels){
    let farn = (1.8 * cels) +32
    return farn
}

console.log(celsToFarn(40)) */



/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */
/* 
function countNumber(numbers, find){
    let count = 0;

    for(const number of numbers){
       if(number === find){
        count++
       }
    }
    return count;
}

const numbers = [5,6,11,12,98, 5];
let find = 5;
console.log(countNumber(numbers, find)); */



// Task-3:
// Write a function to count the number of vowels in a string.

/* function countVowels(borno){
    let count = 0;
    // for (const elements of borno) {
    //     if(elements === 'a' || elements === 'e' ||elements === 'i' ||elements === 'o' ||elements === 'u'){
    //         count++
    //     }
    // }
    // return count;

    const vowels = 'aeiouAEIOU';
    for (const elements of borno) {
            if(vowels.includes(elements)){
                count++;
            }
    }
    return count;
}

const letters = 'Kamal is a good boy';
console.log(countVowels(letters)) */



/* Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */

/* function longestWord(sentence){
   let words =  sentence.split(' ')
   let longestWords = '';
   for(let word of words){
    if(word.length > longestWords.length){
        longestWords = word;
    }
   }
   return longestWords
}

console.log(longestWord('I am learning Programming to become a programmer')); */


/* 
Task-5:
Generate a random number between 10 to 20. */
// console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10))