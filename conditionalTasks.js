// 1st prob
// let burgerPrice = 550;

// if(burgerPrice > 500){
//     console.log("You got a free coke");
// }

// else console.log('buy Coke')

/*** 2nd problem

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
// 1.7 already meter e deya,jdi cm e dewa thatw shetake 100 dye divide kore aage metre e convert kora lagbe

/* let weight = 14;
let height = 1.7;

let bmi = weight / (height * height);

console.log(parseFloat(bmi.toFixed(3)));

if(bmi < 18.5){
    console.log('you are underweight.')
}

else if(bmi >= 18.5 && bmi <=24.999){
    console.log('You are normal');
}

else if(bmi >= 25){
    console.log('you are overweight')
}

else console.log('You are obese') */





/*** 3rd problem

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

/* let score = 77;

if(score > 90 && score <= 100){
    console.log('A')
}

else if(score >= 80 && score <= 89){
    console.log('B');
}

else if(score >= 70 && score <= 79){
    console.log('C');
}

else if(score >= 60 && score <= 69){
    console.log('D');
}

else {
    console.log('Fail')
}
 */




/*** 4th problem

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

/* let myScore = 50;
let myFriendScore = 44;


if(myScore > 80){
    if(myFriendScore > 80){
        console.log('Go For a Lunch')
    }
    else if(myFriendScore >= 60 && myFriendScore < 80){
        console.log('good luck next time.')
    }
    else if(myFriendScore >= 40 && myFriendScore < 60){
        console.log('Message Unseen');
    }
    else{
        console.log('Block');
    }
}

else{
    console.log('Go to sleep');
}

 */


/***Fifth Problem

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// Ternary Operator
/* let num1 = 10;
let num2 = 20;
let result;

result = (num1 > num2) ? num1 * 2 : num1 + num2;
console.log(result)
 */

// If-else Solution
/* let num1 = 30;
let num2 = 20;
let result;

if(num1 > num2){
    result = num1 * 2
}

else{
    result = num1 + num2;
}

console.log(result)
 */



/***Sixth Problem

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

/* let ticketPrice = 800;
let age = 66;
let isStudent = false;
let discount,total;

if(age < 10){
    console.log('Free')
}

else if(isStudent){
    discount = ticketPrice * 50 / 100; 
    total = ticketPrice - discount;
    console.log('Pay Only '+total+' Taka')
}


else if(age >= 60){
    discount = ticketPrice * 15 / 100; 
    total = ticketPrice - discount;
    console.log("You have to pay "+total+' Taka')
}


else{
    console.log('Pay '+ticketPrice+' Taka');
}
 */
