// Argument Vs Parameter
function difference(num1, num2){
    const difference = num1 - num2;
    // console.log(`Father age is ${num1} and my age is ${num2} and our age gap is ${difference}`)
    console.log(num1, num2, 'difference is : ',difference)
}

const fatherAge = 55;
const myAge = 24;

// difference(fatherAge,myAge)


// Function return and set return value to a variable

/* function double(number){
    const result = number * 10;
    return result;
}

double(5);
const output = double(5);
console.log('Output : ', output)
 */

// Recap and conditional return of Odd and Even Number
function add(price1, price2){
    const result = price1 + price2;
    return result;
}

const bill = add(5, 80);
// console.log(bill)


// 2nd Function
function add2(price1,price2){
    return price1+price2;
}

const bill2 = add2(5,80);
// console.log(bill,bill2)


// Do-Math
/* function doMath(num1,num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;

    return result;
}

const result = doMath(10, 5);
console.log(result) */

function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    // else{
    //     return false;
    // }

    // 2nd style
    return false;
}

// const even = isEven(5);
// console.log(even)

// console.log(isEven(1))


// Differnt types  of parameter of a function



// function evenSizedString(str){
//     const size = str.length;
//     console.log(str, size)
//     if(size % 2 === 0){
//         console.log('Even');
//     }
//     else{
//         console.log('Odd')
//     }
// }

// evenSizedString('Dhaka');

// Boolen dibo
/* function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(2, true));
console.log(doubleOrTriple(2, false)); */

// Array dibo
/* function arr(ar){
   return ar;
}

console.log(arr([2,3,4,54,5,1])) */

// function numofElements(numbers){
//     const len = numbers.length;
//     return len;
// }


// Sum Of all numbers in an array using function
function sumOfArray(numbers){
   /*  let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum; */
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }
    return sum;
}

/* const nums = [1, 2, 3, 4, 5];
const sum = sumOfArray(nums);
console.log('Sum of Numbers is: ',sum) */

const arr = [1,2,3,4,5,6];
console.log('Even numbers are :',evenNumbersOnly(arr)) 

/* function evenNumbersOnly(arr){

    const evens = [];

    for(const number of arr){
        if(number % 2 === 0){
            evens.push(number);
        }
    }
    return evens;
}
const arr = [1,2,3,4,5,6];
console.log('Even numbers are :',evenNumbersOnly(arr)) */

function sumOfEvenNumbers(numbers){
    let sum = 0;

    for(const number of numbers){
        if(number % 2 === 0){
            sum += number;
        }
    }
    return sum;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = sumOfEvenNumbers(numbers);
console.log('Sum of the even number is : ',sum);