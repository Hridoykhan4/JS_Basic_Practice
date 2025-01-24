var item1 = {
    nam: 'Hridoy',
    age: 24,
    class: 12
};

var item2 = {
    nam: 'Kamalla',
    age: 26,
    class: 13
};

var addItem = [item1,item2];

var item3 = {
    nam: 'Riki',
    age: 23,
    class: 12
}

addItem.unshift(item3);

for (const element of addItem) {
    if(element.nam === 'Kamalla'){
        element.nam = 'Jamal'
    }
}

/* for (const element of addItem) {
    console.log(`Name is ${element.nam},Age is ${element.age} and class is ${element.class}`)
}
 */
// var addItem = [item1,item2];

// var item3 = {
//     nam: 'Riki',
//     age: 23,
//     class: 12
// };

// addItem.unshift(item3);

// console.log(addItem);

// for (let i = 0; i < addItem.length; i++) {
//     if(addItem[i].nam === 'Kamalla'){
//         addItem[i].nam = 'Antor';
//     }
// }


// for(i = 0;i < addItem.length; i++){
//     console.log("Name is : "+addItem[i].nam);
//     console.log("Age is : "+addItem[i].age);
//     console.log("Class is : "+addItem[i].class);
//     console.log();
// }

// Easy one

// Alt + Shift + A = Comment shortcut

// Cool
// var num  = [12,11,43,23,222,111,555];
// Math.max cannot handle an array directly...So we must use spread operator


// let maxx = Math.max(...num);
// console.log(maxx);


// let bookPrice = [100,200,230,120,180];

// for(let i = 0; i< bookPrice.length; i++){
//     if(bookPrice[i] > 200){
//         continue;
//     }
//     console.log(bookPrice[i]);
// }

let names = ['Jamal', 'Kamal', 'Bhuban', 'Bam', 'Sam'];
let score = [100, 23, 66, 33, 54];
let grade;




/* for(let i = 0; i < score.length; i++){
    if(score[i] >= 90){
        grade = 'A';
    }
    
    else if(score[i] >= 80){
        grade = 'B';
    }
    
    else if(score[i] >= 70){
        grade = 'C';
    }
    
    else if(score[i] >= 60){
        grade = 'D';
    }
    
    else if(score[i] >= 50 ){
        grade = 'E';
    }
    
    else grade = 'F';
    console.log(`${names[i]}'s grade is ${grade}`);
} */


// Slice er khetre kotha theke shuru hbe then end er aage shb katbe
/* let number = [1,2,3,4,5,6,7,8];
number = number.slice(2, 6);
console.log(number);

var bam = 'Arianna is singing in here';
console.log(bam.includes('inn')); */