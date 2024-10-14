const fruits = ['Apple', 'Pineapple', 'Jackfruit', "banana"];

// for (const fruit of fruits) {
//    console.log(fruit)   
//    console.log('I want to eat')
// }


/* let sum = 0;

for(let i = 1; i <= 20 ; i++){
   if(i % 3 === 0){
    console.log(i);
    sum = sum + i;
    console.log('sum = '+sum)  
   }
} */

// While Loop
/* let num = 0;
while(num < 5){
   console.log('Looping',num);
   num++;
} */

// Problem Solving with while loop

// let num = 1;
// let sum = 0
// while (num <= 10){
//    console.log(num);
//    sum = sum + num;
//    console.log('Sum:',sum)
//    num++;
// }

// let num = 1;
// while (num <= 10){
//    console.log(num);
//    if(num % 2 === 0){
//       console.log('Even Number'+num)
//    }
//    num++;
// }


// Practice tasks start
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

/* let hour = 1;
while (hour <= 60){
   console.log('I will invest at least 6 hrs every single day for next 60 days!');
   hour++;
} */

   /***

Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

/* let num = 61;
while(num <= 100){
   if(num % 2 !== 0){
      console.log(num);
   }
   num++;
} */

/* let num = 78;
while(num <= 98){
   if(num % 2 === 0){
      console.log(num);
   }
   num++;
} */


/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
/* let num = 206;
let sum = 0;
while(num <= 311){
   sum = sum + num;
    num += 2;
}
console.log(sum);
 */

/* let num = 81;
let sum = 0;
while(num <= 131){
   if(num % 2 !== 0){
      sum = sum + num;
   }
   num++;
}
console.log(sum); */

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

// let num = 5;
// let i = 1;
// while (i <= 10){
//    console.log(num+' X '+ i+ ' = ' + num * i);
//    i++;
// }

/***

Implement a countdown timer that counts down from 21 to 15.

 */


let count = 21;
while(count >= 15){
   console.log(count);
   count--;
}