// factorial
/* let fact = 1;
let number = 3;

for(let i=1;i<=number;i++){
    fact = fact*i;
}

console.log(fact);
 */

/* function fact(n){
    if(n==1)
        return 1;

    else return n*fact(n-1);
}

console.log(fact(5)); */

// let farn = 104;

// let cels = (farn - 32) * 5 / 9;

// console.log(cels);

// f = 1.8 * c + 32;
// let x=25;

// let y;

// y = x++;
// y = ++x;

// console.log(x)

// let letter = 'e';
// if(letter=='a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
//     console.log("Vowel");
// }
// else{
//     console.log("Consonant");
// }

// Capital,Small
// let letter = 'B';

// if(letter>='a' && letter<='z'){
//     console.log("small letter");
// }
// else if(letter>='A' && letter<='Z'){
//     console.log("Capital Letter");
// }

// let arr = [1,2,3,4,56,7,7,434];

// arr.sort((a,b) =>a-b);
// console.log(arr);

// let i = 1;
// while(i<=10){
//         console.log(i+" Bangladesh");
//         i++;
// }

// for(let i=1;i<=100;i+=3){
//     if(i==10){
//         continue;
//     }
//     if(i>13){
//         break;
//     }
//     console.log(i);
// }

// let sum=0;
// for(let i=1;i<=10;i++){
//     console.log(i+" ");
//     sum = sum+i;
// }
// console.log();
// console.log(sum);

// Multiplication table
// let num = 5;

// for(let i=1;i<=10;i++){
//     console.log(num+" X "+i+" = "+num *i);
// }

// Prime Number
// for loop er baire console hobe
// let x = 10,count = 0;

// if(x==0 || x==1){
//     console.log("Not Prime");
// }

// else{
//     for(let i=2;i<x;i++){
//         if(x%i == 0){
//             count++;
//             break;
//         }
//     }
//     if(count == 0){
//         console.log("Prime");
//     }
//     else{
//         console.log("Not Prime");
//     }
// }

// fibonacci
// let x = 10;

// let first = 0;
// let second = 1;

// let result = first + " "+second;

// for(let i=2;i<x;i++){
//     let fibo = first + second;
//     result += " "+fibo;
//     first = second;
//     second = fibo;
// }
// console.log(result);

// Sum of digit
// let num = 123;
// let sum = 0,r,temp;

// temp = num;

// while(temp!=0){
//     r = temp % 10;
//     sum = sum + r;
//     temp = Math.floor(temp / 10);
// }

// console.log(sum);

// Reverse integer

// let num = 246;
// let sum = 0,temp,r;

// temp = num;
// // number k temp e store korlam

// while(temp!=0){
//     r = temp % 10;
//     sum = sum * 10 + r;
//     temp = Math.floor(temp/10);
// }
// console.log(sum)

// palindrome Number
//  let num = 1221;
// let sum = 0,temp,r;

// temp = num;

// while(temp!=0){
//     r = temp % 10;
//     sum = sum * 10 + r;
//     temp = Math.floor(temp/10);
// }

//     if(num == sum){
//         console.log("Palindrome")
//     }
//     else{
//         console.log("Not Palindrome");
//     }

// Leap year
//    let year = 2024;
// // leap year 29 dine hy,jodi 400 diye divide hy then leap abar 4 diye divide hy,kintu 100 diye divide hy na taw leap

//     if(year%400==0 || (year%4==0 && year%100!=0)){
//         console.log("Leap year");
//     }
//    else{
//     console.log("Not Leap Year");
//    }

// var first = '10';
// var last = '20';

// var add = first +  last;

// console.log(typeof add);

// type conversion
// var price = '10';
// var total = parseInt(price) + 10;
// console.log(total);

// var gpa = "4.5";
// console.log(parseFloat(gpa));

// to fixed,parseFloat er usage
// var num = 0.1;
// var num1 = 0.2;
// var sum = num + num1;

// console.log(parseFloat(sum.toFixed(1)));
