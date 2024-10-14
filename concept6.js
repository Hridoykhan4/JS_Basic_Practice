/* function myFunc(name, country){
    return (`My name is ${name} and my country is ${country}`);
}

console.log(myFunc('Hridoy', 'Bangladesh'));
console.log(myFunc('Hridoy', 'Bangladesh'));
console.log(myFunc('Hridoy', 'Bangladesh'));
console.log(myFunc('Hridoy', 'Bangladesh')); */



// object(product); 
/* function object(a){
    console.log(`Product name is ${a.names} price is ${a.price} and color is ${a.color}`)
}

const product = {
    names: 'Laptop',
    price: 20000,
    color: 'Blue'
}

object(product); */

/* function myDetails(name,age,address){
    return(`My name is ${name}. My age is ${age} and my address is ${address}`)
}

console.log(myDetails('Kamal', 22, 'Kaptai'));
console.log(myDetails('Jamal', 22, 'New Zealand')); */



// problem.js
// Check if the number is even or odd
/* const num = 10;
console.log(checkEvenOdd(num));

function checkEvenOdd(x){
    if(x % 2 === 0){
        return "Even"
    }
    else return "Odd"
} */

/*     function myName(x){
        for(let i = 1; i <= x; i++){
            console.log('Baba')
        }
    }
    myName(4) */


/* -------------------------- 
Validation
--------------------------
*/


/* function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return 'Thik Thak Number de';
    }
    return x + y;
}

console.log(add(3, null)) */

// Always remember typeof returns a string
/* let a = 4;
if(typeof a === 'number'){
    console.log('number')
}
else console.log('not number') */


/* function details(info){
    return `My name is ${info.name} and my age is ${info.age}`
}

console.log(details({name: "Hridoy", age: 24})); */


// console.log(details("xyz"));
/* function details(info){
    if(typeof info !== "object"){
        return "Input should be an object"
    }
    else if(!info.name || !info.age){
        return "Object must contain name and age property"
    }
    else if(typeof info.name !== 'string' || typeof info.age !== 'number'){
        return "Name Should be a string age must be a number"
    }

    else if(info.age <= 0){
        return 'Age must be avobe 0'
    }
    return `My name is ${info.name} and my age is ${info.age}`
}

console.log(details({name: "kamal",age: -10})); */



// Problem solving

/* function findLargest(values){

    if(!Array.isArray(values)){
        return 'Please put array';
    }

    else{
        let max = values[0];
    for(let i = 1; i < values.length; i++){
        if(typeof values[i] !== 'number'){
            return 'Must be put numbers'
        }

        else if(max < values[i]){
            max = values[i];
        }
    }
    }
    return max;
}



// let numbers = [11, 111, 231, 1020, 1,2,3,4,5,6,11,1,2];
// console.log('Max Number is : ',findLargest(numbers))
// console.log(findLargest('Abul'))
console.log(findLargest([1,2,3,4,5,false,'Kamal',22])); */


// Solving 1.js
// 16 anay 1 vhori 


/* function AnaToVori(ana){
    if(ana < 0 || typeof ana !== 'number'){
        return 'Enter an valid integer number'
    }
    const vori = ana / 16;
    return vori
}
console.log(AnaToVori(16))
 */



// 2nd problem
/* function PandaCost(singara, samucha, jilapi){
    
    if(
        typeof singara !== 'number' ||
        typeof samucha !== 'number' || 
        typeof jilapi !== 'number') {
        return 'Please provide valid integer number'
    }
    else if(singara < 0 || samucha < 0 || jilapi < 0){
        return 'All parameters should be positive'
    }
    
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice)
    return total;
}

console.log(PandaCost(1,-1,1));
 */


// 3rd problem


function picnicBudget(participants){
    let first100Cost = 0;
    let second101To200Cost = 0;
    let remainingCost = 0;
    let total = 0;

    if(typeof participants !== 'number' || participants < 0 ){
        return "Participants should be a valid integer number"
    }
    
    if(participants <= 100){
        first100Cost = participants * 5000;
        return first100Cost;
    }
    else if(participants <= 200){
        first100Cost = 100 * 5000;
        second101To200Cost = (participants - 100) * 4000;
        return  first100Cost + second101To200Cost;

    }
    else{
        first100Cost = 100 * 5000;
        second101To200Cost = 100 * 4000;
        remainingCost = (participants - 200)  * 3000;
        return remainingCost + first100Cost + second101To200Cost;
    }

}

console.log(picnicBudget(202));






/* function picnicBudget(participants){
    let first100Cost = 0;
    let second101To200Cost = 0;
    let remainingCost = 0;
    let total = 0;

    if(participants < 0 || typeof participants !== 'number'){
        return 'Participants should be a valid integer number'
    }

    else{
        if(participants <= 100){
            first100Cost = participants * 5000;
            return first100Cost;
        }
        else if(participants <= 200){
            first100Cost = 5000 * 100;
            second101To200Cost = (participants - 100) * 4000;
            return total =  first100Cost + second101To200Cost
        }

        else if(participants > 200){
            first100Cost = 5000 * 100;
            second101To200Cost = (participants - 100) * 4000;
            remainingCost = (participants - 200) * 3000;
            total = first100Cost + second101To200Cost + remainingCost;
            return total;

        }
       


    }
}

console.log(picnicBudget(201)) */