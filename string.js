const country = 'Bangladesh is Nice';
// console.log(country)

// const thana = new String('Demra');
// console.log(typeof thana)

const city = 'Chittagong';
// console.log(city.length)

// Not Possible
// city[2] = 'a'
// console.log(city[2])


// const school = "RAJ UK Uttara Model School";
// console.log(school.toLowerCase())
// console.log(school.toUpperCase())
// const subject = 'Chemistry';
// const book = 'chemisTry';

// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('I am reading');
// }

// else{
//     console.log('Dabba');
// }

// const drink = 'water'
// const liquid = '   water    ';

// if(drink.trim() === liquid.trim()){
//     console.log('Life');
// }

// else{
//     console.log('Not Life');
// }

// Case sensitive
// const book = 'cHemistry'
// const subject = 'chemistry'

// if(book.toLowerCase() == subject.toLowerCase()){
//     console.log('Fada');
// }
// else console.log('Bad')

// const school = "RAJ UK UTTTARA COLLAGE";
// console.log(school.toLowerCase())
// console.log(school.toUpperCase())

// trim()
// const drink = " water";
// const liquid = "water ";
// if(drink.trim() == liquid.trim()){
//     console.log('Kha');
// }
// else console.log('Nai')


// Slice
const address = 'Andorkilla';
// const part = address.slice(3,8);
// console.log(part)



// Split function
const sentence = "I am a good and hardworking person";
// console.log(sentence.split(' '));

// a ke split kore dbe
// const sentence = " I am a good and hardworking person";
// console.log(sentence.split('a'));

// protita string k alada kore dbe
const freindStr = 'Rahim , Sahim ,Jahim ,Nur , Jaman';
// console.log(freindStr.split(','))

// Array er khettre join use hy
const real = [ 'Rahim ', ' Sahim ', 'Jahim ', 'Nur ', ' Jaman' ];
// console.log(real.join(' - '))

const first = 'Rana';
const last = 'Nabid';

// console.log(first.includes('a'))
// console.log(first.concat(' ').concat(last))

// console.log(first + ' ' + last);
// console.log(first.concat(' ').concat(last))

// console.log(first.includes('an'));

// Reverseing string
const sent = 'I am learning web dev.';
let reverse = '';



// for(const letter of sent){
//     reverse = letter + reverse;
// }
// console.log(reverse)

for(let i = 0; i < sent.length; i++){
    // console.log(i)
    // console.log(sent[i])
    // const letter = sent[i];
    // reverse = sent[i] + reverse;
}
// console.log(reverse)


for (let i = 0; i < sent.length; i++) {
    // reverse = sent[i] + reverse; 
}

// console.log(reverse); 




for(let i = sent.length - 1; i >= 0; i--){
    reverse += sent[i]; 
}
// console.log(reverse)

// While loop

// --1 deyar reason hcche length hy 23 Ta but ase 22 ta eojnne
// let i = sent.length-1;

// while(i >= 0){
//     reverse += sent[i];
//     i--;
// }
// console.log(reverse)

const reversed = sent.split('').reverse().join('')
console.log(reversed)

// Shortcut technique
// const reversed = sent.split('').reverse().join('');
// console.log(reversed)

// console.log(sent.split('').reverse().join(''))
