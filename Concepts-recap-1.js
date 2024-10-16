// 1 feet = 12 inch


/* function inchToFeet(inch){
    let fractionInch = inch / 12;
    const feetNumber = parseInt(fractionInch);
    const inchRemaining = inch % 12;
    return feetNumber + ' ft ' + inchRemaining + ' inch';
}

console.log(inchToFeet(75)) */

// Miles to kilo
/* function milesTokilo(mile){
    // 1.609 km
    return mile * 1.609
    
}

console.log(milesTokilo(2)); */

// Kilometre to miles
/* function kmToMiles(kilo){
    // 0.621 miles
    return kilo * 0.621;
    
}

console.log(kmToMiles(2)); */
// Simple Leap year
// Year will be a leap year if the year is divisible by 4


// Leap Year
/* function isLeap(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return 'Leap Year'
    }
    return 'Not Leap'
} */

function isLeap(year){
    if((year % 100 !== 0 && year % 4 === 0) || (year % 400 === 0)){
        return 'Leap Year'
    }
    // else if(year % 400 === 0){
    //     return 'Leap year'
    // }
    return 'Not Leap';
}


/* console.log(isLeap(2100));
console.log(isLeap(2400));
console.log(isLeap(1900));
console.log(isLeap(2050)); */

// Those year that is not divisible by 100 and if the year is divisible by 4,then leap year;
// 3rd part

// Calculate avg of odd numbers in an array
/* 
function oddAverage(numbers){
    const odd = [];
    for (const number of numbers) {
        if(number % 2 === 1){
           odd.push(number);
        }
    }
    let sum = 0;
    for (const number of odd) {
        sum += number;
    }   
    const length = odd.length;
    console.log(sum, length)
    const avg = sum / length;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 7];
console.log('Average of the odd number is :  ', oddAverage(numbers)); */

// Calculate avg of even numbers in an array
/* 
function oddAverage(numbers){
    const even = [];
    for (const number of numbers) {
            if(number % 2 === 0){
                even.push(number);
            }
    }
    let sum = 0;
    for (const number of even) {
        sum += number;        
    }
    return sum / even.length
}

const numbers = [42, 13, 58, 65, 81, 7];
console.log('Average of the even number is :  ', oddAverage(numbers));  */


// Remove duplicate items in an array

/* function noDuplicate(array){
    const unique = [];
    for (const arr of array) {
        if(unique.includes(arr) !== true){
            unique.push(arr);
        }
    }
    return unique
}
 */
/* const numbers = [1,2,2,33,21,2,2,2];
const biraniKhor = ['abul', 'babul', 'cabul',  'abul', 'babul'];
console.log(noDuplicate(biraniKhor)) */



// Swap

/* let a = 5;
let b = 7;

console.log(a, b);

const temp = a;
a = b;
b = temp;
console.log(a,b) */

// Destruction
/* let x = 5;
let y = 7;
[x,y] = [y,x]
console.log(x,y) */