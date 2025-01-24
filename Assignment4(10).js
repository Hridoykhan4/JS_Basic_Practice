/* function calculateTax(monthlyIncome, monthlyExpense){
    if(monthlyIncome < 0 || monthlyExpense < 0 || monthlyIncome < monthlyExpense){
        return 'Invalid Input'
    }
    const differenceOfTotal = monthlyIncome - monthlyExpense;
    const tax =  (differenceOfTotal * 20) / 100;
    return tax;
}

console.log(calculateTax(10000, 3000))
console.log(calculateTax(34000, 1753))
console.log(calculateTax(5000, 1500))
console.log(calculateTax(7000, 7000))
console.log(calculateTax(-5000, 2000))
console.log(calculateTax(6000, -1500)) */
/* Problem-01 : Tax Calculator
⚠️ Function Name Must be calculateTax()
হারুণ একজন সফল হোটেল ব্যবসায়ী। তার হোটেল টি অনেক জনপ্রিয় হয়ে উঠছে  এবং মাসের শেষে তার আয় ও খরচের একটি পরিস্কার ধারণা থাকা খুবই গুরুত্বপূর্ণ। তার মাসিক আয় এবং খরচ থেকে সঠিক ট্যাক্স ক্যালকুলেট করতে তাকে সাহায্য করার জন্য তুমি একটি ফাংশন তৈরি করবে।
তোমার ফাংশনটি দুটি ইনপুট নিবে:
মাসিক আয় - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক আয়কে প্রকাশ করে।
মাসিক খরচ - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক খরচকে প্রকাশ করে।
ফাংশনটি আয় এবং খরচের পার্থক্যের ২০% হিসাব করবে এবং তা ট্যাক্স হিসেবে রিটার্ন করবে।

Input :  
প্রথম ইনপুট:  একটি পজিটিভ সংখ্যা যা মাসিক আয়। (0<=income )
দ্বিতীয় ইনপুট: একটি পজিটিভ সংখ্যা যা মাসিক খরচ।  (0<=expense )
Income সবসময় expense থেকে সমান বা  বেশি হবে।  (income >=expense)
Output :   ফাংশনটি ক্যালকুলেটেড ট্যাক্স রিটার্ন করবে। Output দশমিক সংখ্যা ও হতে পারে।
Hints 💡:  income 10000 টাকা এবং expense 3000 টাকা হলে তাঁর আয় এবং খরচের পার্থ্যক্য হবে 
10000-3000 = 7000 টাকা।  সুতরাং তার ট্যাক্স হবে (7000 * .20)  =1400  টাকা।  
 */

// Solution 1
// function sendNotification(email){
//     if(!email.includes('@')){
//         return 'Invalid Email'
//     }
//     const divideMail = email.split('@');

//         return `${divideMail[0]} sent you an email from ${divideMail[1]}`

// }

// console.log(sendNotification('zihad@gmail.com'));
// console.log(sendNotification('farhan34@yahoo.com'));
// console.log(sendNotification('nadim.naem5@outlook.com'));
// console.log(sendNotification('fahim234@hotmail.com'));
// console.log(sendNotification('sadiaa8icloud.com'));

// soltion 2

// function sendNotification(email) {
//   const newEmail = email.split("@");
//   /*     const message = email.includes('@') ? `${newEmail[0]} sent an email from ${newEmail[1]}` : 'Invalid'
//     return message */
//   const message =
//     email.indexOf("@") !== -1
//       ? `${newEmail[0]} sent an email from ${newEmail[1]}`
//       : "Invalid";
//   return message;
// }

/* console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234@hotmail.com'));
console.log(sendNotification('sadiaa8icloud.com')); 
 */
/* Problem 02 : Notification Generator
⚠️ Function Name Must be sendNotification()
তোমরা জানো, একটি ইমেল ২টি অংশ নিয়ে গঠিত হয়, একটি হল `username` অন্যটি `domain name`। যেমন zihad.ph@gmail.com এখানে zihad.ph হলো ইউজার নেইম,  gmail.com হলো ডোমেইন নেইম।  তোমাকে এমন একটি ফাংশন বানাতে হবে যা input হিসেবে একটা email নিবে।  ফাংশনের কাজ হবে, ইমেইলে থাকা `username` ও `domain  name` আংশ গুলো ব্যবহার করে, একটি notification message তৈরি করা।  
ফাংশনটি একটি নতুন string রিটার্ন করবে যেখানে ইমেলে থাকা `username` ও `domain name` অংশ ২টি ব্যবহার করে notification  এর জন্য মেসেজ তৈরি করতে হবে ।  Output কি হবে সেটা নিচে  ভাল করে দেখো।  
Input :  ইনপুট হবে একটি string, যা হবে একটি ইমেইল (যেমন, zihad@gmail.com) 
@ ক্যারেক্টার টি স্ট্রিং এ একবার ই থাকবে। এটা  userName  এবং DomainName  এর মাঝখানে ই থাকবে।  


Output: zihad.ph@gmail.com এই ইমেইলের জন্যে আউটপুট টি হবে ঠিক এরকম। 
zihad.ph sent you an email from gmail.com


Challenge 📢 : যদি ইনপুটটি একটি valid email না হয় অর্থাৎ ইমেইলে @ না থাকে তাহলে একটি এরোর মেসেজ "Invalid Email" রিটার্ন করবে।  

  
Hints 💡:  split() , indexOf() মেথড ব্যবহার করতে পারো। 
 */

/* function checkDigitsInName(name){
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    for (const elements of name) {
        if(!isNaN(elements)){
            return 'true';
        }
        
    }
    return false;
}

 */

/* 
Problem-03: Checking Digits Inside a Name
⚠️ Function Name Must be checkDigitsInName()
রাজু পাসপোর্ট রেজিস্ট্রেশনের জন্যে নতুন একটা ওয়েবসাইট বানিয়েছে।  সেখানে অনেকেই নাম ইনপুট দেয়ার সময়  নামের পাশাপাশি  বিভিন্ন নাম্বার ভুল করে দিয়ে ফেলছে। যেটা রাজু একদম ই চায়না।  তাই রাজুকে তোমার হেল্প করতে হবে। তুমি checkDigitsInName() নামে একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নেবে এবং নামের মধ্যে কোনো সংখ্যা আছে কিনা তা চেক করবে। 
যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে false  রিটার্ন করবে। ইনপুট যদি স্ট্রিং না হয়, তবে Invalid Input রিটার্ন করবে।
Input :  একটি স্ট্রিং ইনপুট হিসেবে নেবে। 


Output :  এটা  রিটার্ন করবে একটা বুলিয়ান ভ্যালু  : true / false
যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে false  রিটার্ন করবে। 


Challenge 📢 : ইনপুট যদি স্ট্রিং বাদে অন্য কিছু হয়, তবে "Invalid Input" রিটার্ন করবে।
 */

// function calculateFinalScore(info) {
//   if (
//     typeof info !== "object" ||
//     typeof info.name !== "string" ||
//     typeof info.testScore !== "number" ||
//     typeof info.schoolGrade !== "number" ||
//     typeof info.isFFamily !== "boolean"
//   ) {
//     return "Invalid Input";
//   }

//   return info.testScore + info.schoolGrade + (info.isFFamily ? 20 : 0) >= 80;

//   /*   const parentProfessionFarmer = 20;

//     let total = info.testScore + info.schoolGrade;

//     if(info.isFFamily === true){
//         total += parentProfessionFarmer;
//     }

//     return total >= 80 */
// }

/* const information = {
     name: "Rajib",
     testScore: 45,
     schoolGrade: 25,
     isFFamily : true
}

console.log(calculateFinalScore(information));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
 */

/* Problem 04 : Calculate Admission Final Score 
⚠️ Function Name Must be calculateFinalScore()
রাকিব একটি সফটওয়্যার কোম্পানিতে প্রোগ্রামার হিসেবে কাজ করছেন। তার ছোট ভাই, রাজিব, একটি বিখ্যাত বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষা দিয়েছে। ভর্তি পরীক্ষার ফলাফল বিভিন্ন মানদণ্ডের উপর ভিত্তি করে নির্ধারিত হবে। রাজিবের পরীক্ষার স্কোর, স্কুলের গ্রেড, এবং অভিভাবকের প্রোফেশন (যদি "farmer" হয়) সবকিছু মিলিয়ে তার ফাইনাল স্কোর বের করতে হবে।তুমি যেহেতু রাকিবের সহকর্মী এবং ভালো প্রোগ্রামার, তাই রাকিব চায় তুমি একটি ফাংশন calculateFinalScore() বানিয়ে দাও, যা রাজিবের বিভিন্ন তথ্য ইনপুট হিসেবে নিয়ে ফাইনাল স্কোর বের করবে। ফাইনাল স্কোর যদি ৮০ বা তার বেশি হয়, তাহলে সে ভর্তি হতে পারবে। অন্যথায়, সে ভর্তি হতে পারবে না। 
Scoring Criteria
testScore:  ৫০ পয়েন্ট সর্বোচ্চ
schoolGrade : ৩০ পয়েন্ট সর্বোচ্চ
Parent Profession: যদি "farmer" হয়, ২০ পয়েন্ট

Input :  একটি অব্জেক্ট ইনপুট হিসেবে নেবে।  অবজেক্ট এ অবশ্যই name,  testScore, schoolGrade, isFFamily প্রোপার্টি গুলো থাকবে।  যেখানে 
typeof name = string 
typeof testScore= number ( testScore <= 50) 
typeof schoolGrade = number ( schoolGrade <=30) 
typeof  isFFamily = boolean


Output :  এটা রিটার্ন করবে একটা বুলিয়ান ভ্যালু : true / false


Challenge 📢:  যদি ইনপুট টি অব্জেক্ট না হয় তাহলে একটি এরর মেসেজ দেবে একটি  "Invalid Input"

 */

/* function waitingTime(doneArray, isratSerial){
    if(!Array.isArray(doneArray) || typeof isratSerial !== 'number'){
        return 'Invalid Input'
    }
    let sum = 0;
    for (const arr of doneArray) {
        sum += arr;
    }
    const avg =Math.round(sum / doneArray.length) ;
    const remaininginterviewees = (isratSerial - 1) - doneArray.length;
    const isratWait = avg * remaininginterviewees;
    return isratWait;
}

let array = [ 3, 5, 7, 11, 6 ];
let serialNumber = 10;
console.log(waitingTime(array, serialNumber));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
 */
/* Problem 05:  Predict Avarage Waiting Time 
⚠️ Function Name Must be waitingTime()
ইসরাত একটি চাকরির ইন্টারভিউয়ের জন্য অপেক্ষা করছে। তার সিরিয়াল আসলে তাকে ডাকা হবে।  দেয়ালে একটা স্ক্রিনে যারা যারা ইন্টারভিউ দিয়েছে তাদের লিস্ট এবং  প্রত্যেকের কত মিনিট সময় লেগেছে তা দেখাচ্ছে।  ইসরাত বুঝতে পারছেনা যে তাঁর আসলে আর কতক্ষন সময় লাগবে।  তোমার কাজ হলো ইসরাতের আর কত সময় লাগবে তা ক্যালকুলেশন করে বের করার জন্য waitingTime() নামে একটা ফাংশন তৈরি করা। 
ফাংশন টি ২ টা input নেবে ।  ১ম টি হচ্ছে  একটা number এর Array ।  যাদের ভাইভা হয়ে গেছে তাদের  ইন্টারভিউ টাইম। ২য়  টি হচ্ছে ইসরাতের সিরিয়াল নাম্বার।  ফাংশন টি যাদের ভাইভা হয়ে গেছে তাদের সময়ের একটা এভারেজ বের করবে এবং বর্তমান সিরিয়ালের পর থেকে  ইসরাতের আর কত সময় লাগবে সেটা বের করবে এবং আউটপুট হিসেবে রিটার্ন করবে।  
Input :  ফাংশন টি ২ টি ইনপুট নেবে ,  
একটি হলো Array ( যাদের ভাইভা হয়েছে তাদের সময় )  , অন্যটি হলো  ইসরাতের সিরিয়াল নাম্বার।
Serial Number >  length of array 


Output : 
যাদের ভাইভা হয়েছে তাদের রাউন্ডেড এভারেজ বের করো।  ইসরাতের আগে আর কয়জন বাকী আছে তা বের কর।  এবং এই দুটো জিনিস  দিয়ে ইসরাতের waiting time বের করে সেটাকে return করে দাও।   
Example:  array =   , serial Number = 10
তাহলে এখানে 5 জনের   এভারেজ ইন্টারভিউ টাইম হলো 6 minute (rounded)
ঈসরাতের সিরিয়াল নাম্বার ১০ এর মানে হলো যে তাঁর আগে আছে 10-1 = 9 জন।  
যেহেতু ৫ জনের হয়ে গেছে সেহেতু ইসরাতের আগে আর ভাইবা বাকী আছে  4 জনের। এবার তুমি ই বলো যে ইসরাতের কত সময় লাগবে?   


Challenge 📢 : যদি প্রথম ইনপুট Array না হয় এবং ২য় ইনপুট যদি নাম্বার না হয় তাহলে Invalid Input রিটার্ন করবে।


 */
