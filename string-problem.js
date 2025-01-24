// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
/* const str = 'Alif Laila is now in english subtitle';
let count = 0;
let vowels = "AEIOUaeiou";
for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
    console.log(count > 4) */

    
//Task-5:
// Capitalize Every first Letter of each word in a String
const sentence = 'i am a very intelligent boy';
const sentenceSplit = sentence.split(' ');
let newSentence = ''
for (const sent of sentenceSplit) {
    newSentence +=  sent[0].toUpperCase()+sent.slice(1)+' ';
}
console.log(newSentence)




/* for(let i = 0; i < str.length; i++){

    let char = str[i];

    if(vowels.includes(char)){
        count++;
    }
}

console.log(count > 4) */



// Count how many times a string has the letter a
let nam = "Hridoy Akhaaaan";

/* for(let i = 0; i < nam.length; i++){
    if(vowels.includes(nam[i])){
        count++;
    }
}

console.log(count > 4); */

// Count how many times a string has the letter a || A

// Task-1:
// Count how many times a string has the letter a
/* const quote = "alif Laila is a great character that spreads happiness"; // a = 10
let count = 0;

// 4th system
for(let i = 0; i < quote.length; i++){
   if(quote[i] == 'a'){
    count++;
   }
}

console.log(count)
 */

// 3rd system
// let count = quote.split('a').length-1;
// console.log(count)

// 1st system
// for(const key of quote){
//     if(key === 'a'){
//         count++;
//     }
// }
// console.log(count);

// 2nd system
/* for(let key of quote){
    if(key.includes('a')){
        count++;
    }
    }
    console.log(count) */
    
// Task-2:
// Count how many times a string has the letter a or A

// 3rd system
// let count = sentence.toLowerCase().split('a').length - 1;
// console.log(count)

// 2nd system
// for(let i = 0; i < sentence.length; i++){
//     if(sentence[i].includes('a')|| sentence[i].includes('A')){
//         count++;
//     }
// }
// console.log(count)

// 1st system
/* for(const words of sentence){
    if(words === 'a' || words === 'A'){
        count++;
        }
}
console.log(count)
*/

