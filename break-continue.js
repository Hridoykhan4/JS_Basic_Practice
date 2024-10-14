// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         if(i == 10){
//             break;
//         }
//         console.log(i);
//     }
// }


// for(let i = 0; i < 150; i++){
//     if(i > 5){
//         break;
//     }
//     console.log(i);
// }



// let n = 54;
// while(n > 25){
//     if(n <= 50){
//         break;
//     }
//     console.log(n);
//     n--;

// }


// for(let i = 1; i < 10; i++){
//     if(i % 2 !== 0){
//         continue;
//     } 
//     console.log(i)
// }


// let n = 0;
// while (n < 15){
//     n++;
//     if(n % 5 !== 0){      
//         continue;
//     }
//     console.log(n);
// }


let i = 1;
let sum = 0;
while(i <= 30){
    if(sum + i >= 100){
        break;
    }
    sum += i;
    i++;
    
}
console.log(sum)
console.log('Number it stops is : ',i)

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// let i = 1,sum = 0;
// while(i <= 200){
//     sum += i;
//     if(sum >= 100){
//         break;
//     }

//     i++;
// }
// console.log(sum)


// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
// for (let i = 0; i < 40; i++) {
//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(i);
// }


// display odd number from 55 to 85 and skip the numbers divisible by 5.
// let num = 54;
// while(num <= 85){
//     num++;  
//     if(num % 5 == 0){
//         continue;
//     }
//     console.log(num);
   
// }


// do while
// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i < 5);