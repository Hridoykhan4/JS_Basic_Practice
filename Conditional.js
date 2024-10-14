let burgerPrice = 90;
let myBudget = 70;

if(burgerPrice<=myBudget){
    console.log("Burger");
}

else{
    console.log("Shankara");
}

let score =60;

if(score<0 || score>100){
    console.log("Invalid Score");
}

else if(score>=90){
    console.log('A+')
}

else if(score>=80){
    console.log('A');
}

else if(score>=70){
    console.log('A-');
}

else if(score>=60){
    console.log('B');
}

else if(score>=50){
    console.log('C');
}

else if(score>=40){
    console.log('D');
}

else{
    console.log("Fail");
}

// // logical operator

/* let isMatricpass = true;
let income=20000;
let iphone = 2;

if(isMatricpass==true && income>=20000){
    console.log("Cholo");
}
else{
    console.log("futo");
}
 */


// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }


// const myArray = ["Kamal", "Jamal", "Nanna", "Kappa"];
// let i=0;
// while(i<myArray.length){
//     console.log(myArray[i]);
//     i++;

//     if(i>2){
//         break;
//     }
// }

// let i=10;
// do{
//     console.log(i);
//     i--;
// }while(i>=1);

let num=22;

switch(num){
    case 1:
        console.log("One");
        break;
    
    case 2:
        console.log("Two");
        break;

    default:
        console.log("Three");
}