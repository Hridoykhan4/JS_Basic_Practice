// Task-1
// Take four parameters. Multiply the four numbers and then return the result

/* function multiply(a,b,c,d){
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number'){
        return `Enter Only integer Numbers`
    }
    return a*b*c*d;
}
console.log(multiply(2,3,2,3)) */


/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

/* function mulDiv(number){
    if(number % 2 === 0){
       return number / 2;
    }
    else{
        return number * 2;
    }
}

console.log(mulDiv(10))
 */

/* Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
/* function make_avg(arrays, size){
    if(!Array.isArray(arrays)){
        return `Please Only Put Arrays`;
    }

    let sum = 0;
    for(const array of arrays){
        sum += array;
    }
    return sum / size;

}

let arrays = [1,2,3,4,5,6];
let size = arrays.length;
console.log(make_avg(arrays, size)) */


/* Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */ 


/* function count_zero(binary){
    let count0 = 0;
    let count1 = 0;

    for (const bin of binary) {

        if(bin.includes('0')){
            count0++;
        }
        else count1++;
        
    }
    return {
        count0,
        count1
    }
}

console.log(count_zero('000000000011111')); */

/* Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function  odd_even(number){
    if(number % 2 === 0){
        return `Even`
    }
    return `Odd`
}

console.log(odd_even(10));
console.log(odd_even(5));




















