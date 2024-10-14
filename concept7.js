
/* আমার কাছে একটা array তে কিছু নাম্বার আছে, আমাকে বের করতে হবে সবচেয়ে বড় নাম্বার কোনটা ।

const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
console.log(Math.max(...numbers))
 */


// function(maxNumber){
    
// }
    

const numbers = [2, 4, 21, 5, 6, 23, 20, 9];

// console.log(Math.max(...numbers))


/* let max = numbers[0];
console.log('Before biggest',max); */

/* for(let i = 1; i < numbers.length; i++){
    console.log("current number: ",numbers[i], "biggest number: ",max)
    if(numbers[i] > max){
        max = numbers[i];
    }
    console.log('Current biggest', max)
}
console.log("After loop : ",max) */


// Passing a object


function showInfo(info){
/*     if(typeof info !== 'object'){
        return 'Enter an Object';
    }
    return `My name is ${info.name} and I live in ${info.address}` */
    // const result = info.name+"@"+info.address;
    // return result;
    // return  `${info.name}@${info.address}`
}


/* const person = {
    name: 'Kamal',
    address: 'Kaptai'
}
 */
// console.log(showInfo(person))

/*  আপনার মাসিক খরচ, ঘর ভাড়া ৫০০০, খাবার খরচ ৩০০০, হাত খরচ ২০০০, মাস শেষে আপনার সেভিংস কত হবে, আপনার আয় এর উপরে ভিত্তি করে; */

/* function calculateSaving(money){

    const houseRent = 5000;
    const mealCost = 3000;
    const personalExpense = 2000;
    
    const total = houseRent + mealCost + personalExpense;
    
        if(typeof money !== 'number' || money < total){
            return 'Invalid input and earn more'
        }
    return money - total;
}

console.log(calculateSaving(7000)) */

// একটা array এর ভেতরে কয়টা boolean ভ্যালু আছে তার কাউন্ট করে দেখানো

/* 
function checkBool(boolean){
    if(!Array.isArray(boolean)){
        return 'Insert an array';
    }
    let count = 0;

    for(const bool of boolean){
        if(typeof bool === 'boolean'){
            count++;
        }
    }
    return count;
}


let array = [false,false,false,1,2,3,4,true,true];
console.log(checkBool(array)) */
/*
bus = 50;
micro = 15
rickshaw cost 20 taka
borjatri = 234;
bus (4) = 200 , remaining = 34
mircro (2) = 30, remaining = 4
rickshaw (4) = 20 *4 = 80 taka

*/

/* function rickshawBhara(people){
    const bus = 50;
    const micro = 15;
    const rickshawCost = 20;
    const remianAfterBus =  (people % bus);

    const remainAfterMicro = remianAfterBus % micro;

    const totalRickshawCost = remainAfterMicro * rickshawCost;

    return totalRickshawCost;

}

console.log(rickshawBhara(234)); */


// Job tasks

const person1 = {
    name: "Abul Kashem",
    honors: 40,
    hsc: 30,
    isFFfamily: true
};

const person2 = {
    name: "mokber mia",
    honors: 45,
    hsc: 32,
    isFFfamily: false
};

function jobSelection(info){
        if(typeof info !== 'object'){
            return "Invalid Object"
        }
        let total_marks = info.honors + info.hsc;

        if(info.isFFfamily === true){
            total_marks = total_marks + (total_marks * 20 / 100);
        }

        
        console.log(total_marks)

        if(info.isFFfamily && total_marks >= 80){
            return "Aho Vatiza aho"
        }
        else if(info.isFFfamily && total_marks < 80){
            return "Bad Luck Bhatiza, Better luck next time"
        }
        else if(!info.isFFfamily && total_marks >= 80){
            return "You got the job"
        }
        else if(!info.isFFfamily && total_marks < 80){
            return "Rajakar Rajakar";
        }

 
        /* if(total_marks >= 80){
            return 'You got the job';
        }
        return "sorry" */
}

/* console.log(jobSelection(person1));
console.log(jobSelection(person2)); */