// const price = 10000;

// if(price >= 5000){
//     const discount = price * 10 / 100;
//     console.log(discount);
//     const payAmount = price - discount;
//     console.log("Your Cost is : "+payAmount)
// }

// else if(price >= 2500){
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log('Your Cost is : '+payAmount);
// }

// else console.log(price);

const age = 52;
const price = 500;
let discount;
let total;

if(age <= 12){
    discount = price * 20 / 100;
    total = price - discount;
    // console.log('You have to pay '+total+' taka');
}

else if(age >= 60){
    discount = price * 50 / 100;
    total = price - discount;
    // console.log('You have to pay '+total+' taka');
}

else if(age >= 50){
    // 25% discount
    discount = price * 25 /100;
    total = price - discount;
    // console.log('You Have to Pay '+total+' Taka')
}


else {
    // console.log('Please pay '+price);
}

// BMI calculation
// let weight = 72;
// let height = 170 / 100;

// let bmi = weight / (height * height);
// console.log('Your BMI is '+bmi.toFixed(2))

// if(bmi < 18.5){
//     console.log('You are underweight')
// }

// else if(bmi >= 18.5 && bmi < 24.9){
//     console.log('You have normal weight');
// }

// else if(bmi >= 25 && bmi <= 30){
//     console.log('You are overweight');
// }

// else console.log('You Have Obesity');

let grade = 50;

if(grade >= 80 && grade <= 100){
    console.log('A+');
}

else if(grade >= 70 && grade <= 79){
    console.log('A');
}

else if(grade >= 60 && grade <= 69){
    console.log('B');
}

else if(grade >= 50 && grade <= 59){
    console.log('C');
}

else if(grade > 44 && grade <= 49){
    console.log('D');
}

 else{
    console.log('Fail')
}