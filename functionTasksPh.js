// Task-1
// Take four parameters. Multiply the four numbers and then return the result

/* function para4(num1,num2,num3,num4){

    if(typeof num1 !== 'number' ||typeof num2 !== 'number' ||typeof num3 !== 'number' ||typeof num4 !== 'number'){
        return 'Enter Valid Number';
    }
    return num1 * num2 * num3 * num4;
}

console.log(para4(2,3,4,5));
console.log(para4(2,1,'2',1)); */
/* 
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

/* function oddEvenCheck(num){
    if(num % 2 !== 0){
        return num * 2;
    }
    return num / 2;
}

console.log(oddEvenCheck(4)); */

/* 
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

/* function make_avg(arry, size){
    if(!Array.isArray(arry)){
        return 'Please send an array';
    }
    
    let sum = 0;
    for(let i = 0; i < size; i++){
        sum += arry[i];
    }

    return sum / size;



}

let array = [2,54,11,2,3,4];
let size = array.length;

console.log(parseFloat(make_avg(array, size).toFixed(2))); */

/* 
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */


function count_zero(num){
    let count1 = 0
    let count2 = 0;


    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(num[i] == 0){
            count1++;
        }
        else if(num[i] == 1){
            count2++;    
        } 
    }
    return `Here the binary digit zero are ${count1} and Binary digit 1 are ${count2}`;
}   

const binaryNum = "0000011111";
console.log(count_zero(binaryNum));








/* function count_zero(number){
    if(typeof number !== 'string'){
        return 'Enter an string';
    }

    let count = 0;

    for(let num of number){
      if(num === '0'){
        count++;
      }
    }
    return count;
   
}

let a = "000000000011111";
console.log(count_zero(a)); */