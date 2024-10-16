/* function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(96, 79); // 96
const max2 = getMax(56, 98); // 98

const ultimateMax = getMax(max1, max2);
console.log(ultimateMax) */

// Max3.js

// const jim = 56;
// const tim = 89;
// const kim = 168;

// if(jim > tim && jim > kim ){
//     console.log('Jim is great');
// }
// else if(tim > jim && tim >kim){
//     console.log(`Tim is great`);
// }
// else console.log('Kim is gr8')


// Tallest.js
/* const heights = [65, 66, 68, 72, 78, 60];

function getMax(numbers){
    let max = numbers[0];
    for (const num of numbers) {
     
        if(num > max){
            max = num;
        }
    }
    return max;
}

console.log(getMax(heights)) */

// Lowest.js
/* function getLowest(numbers){
    let min = numbers[0];

    for (const number of numbers) {
        if(number < min){
            min = number;
        }
    }
    return min;
}

console.log(getLowest([22,11,33,5,4,111,2])); */


/* 
*
 */
// Use Add and Multiplication to calculate wood requirements
// Wood.js

// chair --> 3 cft
// Table --> 10 cft
// Bed --> 50 cft

/* function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedTool = 50;

    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedWood = bedQuantity * perBedTool;

    return allChairWood + allTableWood + allBedWood

}


const wood = woodQuantity(0, 1, 4);
console.log(wood); */


/* 
    shirt price= 500
    pant price= 300
    shoe price= 900
*/

/* function totalCost(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 300;
    const showPrice = 900;

    const shirtTotal = shirtPrice * shirtQuantity;
    const pantTotal = pantPrice * shirtQuantity;
    const showTotal = showPrice * shirtQuantity;
    return shirtTotal + pantTotal + showTotal;
}


console.log(totalCost(1,1,1)) */


/* const phones = [ 20000, 16000, 50000, 100000, 12000, 30000];
console.log(getcheapest(phones)); */

// Find the cheapest phone from an array of phone objects
// Easy One
/* const phones = [ 20000, 16000, 50000, 100000, 12000, 30000];
function getMin(numbers){
    let min = numbers[0]
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}
const cheap = getMin(phones);
console.log('Cheapest One is: ',cheap); */

/* 
function expensivePhone(phones){
    let max = phones[0]
    for (const phone of phones) {
            if(phone.price > max.price){
                max = phone;
            }
    }
    return max;
}

const mobiles = [
    {name: 'Samsung', price: 30000, color: 'black'},
    {name: 'Oppo', price: 20000, color: 'black'},
    {name: 'One Plus', price: 40000, color: 'black'},
    {name: 'Xioami', price: 50000, color: 'black'},
    {name: 'Iphone', price: 100000, color: 'black'},
    {name: 'Vivo', price: 11000, color: 'black'},
]


console.log(expensivePhone(mobiles));

 */

/* function getCheapestPhone(phones){


    let min = phones[0]
   for (const phone of phones) {
    if(phone.price < min.price){
        min = phone;
    }
}
return min
}

const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp', color:'black'},
    {name: 'Xaomi', price: 18000, camera: '12mp', color:'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color:'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color:'black'},
    {name: 'Walton', price: 31000, camera: '12mp', color:'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color:'black'},

]

const cheap =getCheapestPhone(mobiles);
console.log('Cheapest Phone is : ',cheap) */


// ShoppingCart.js
/* const shoppingProducts = [
   {name: 'Shampoo', price: 300},
   {name: 'Chiruni', price: 100},
   {name: 'shirt', price: 700},
   {name: 'pant', price: 1200}
]

function getShoppingTotal(products){
    let sum = 0;
    for (const product of products) {
        sum += product.price;
    }
    return sum
}

console.log(getShoppingTotal(shoppingProducts))
 */

/* const shoppingProducts = [
    {name: 'Shampoo', quantity: 2, price: 300},
    {name: 'Chiruni', quantity: 3, price: 100},
    {name: 'shirt', quantity: 5, price: 700},
    {name: 'pant', quantity: 1, price: 1200}
 ]
 

 function cartTotal(products){
    let sum = 0;
    for(const product of products){
        sum += product.quantity * product.price;
    }
    return sum
}

 console.log(cartTotal(shoppingProducts));

 */



//  Discount
/* 
*upto 100 == 100
*more than 101-200 == 90
*more than 200 ==70
*/

/* function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

console.log(discountPrice(201)) */

// Layered Discount
/* 
first 100 == 100
101to 200 = 90
avobe 200 = 70;
*/
/* 
function layeredDiscountTotal(quantity){
    const first100Price = 100;
    const second101To200Cost = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingCost = (quantity - 100) * second101To200Cost;
        return first100Total + remainingCost;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100To101Cost = 100 * second101To200Cost;
        const remainingCost = (quantity - 200) * above200Price;
        return first100Total + remainingCost + second100To101Cost;
    }
}

console.log(layeredDiscountTotal(201)) */

/* function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operator){
    if(operator === 'add'){
       return add(a, b);
    }
    else if(operator === 'subtract'){
        return subtract(a,b)
    }
    else if(operator === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operator === 'division'){
        return division(a, b)
    }
    else{
        return 'Enter Valid Operation'
    }
}
 */
/* console.log(calculator(10, 2, 'add'));
console.log(calculator(10, 2, 'subtract'));
console.log(calculator(10, 2, 'multiply')); */
// console.log(calculator(10, 2, 'division'));
// console.log(calculator(10, 2, 'kala'));


// Validation
/* function multiply(num1, num2){
    const mult = num1 * num2;
    return mult
}
console.log(multiply(2,'11')) */


/* function getPrice(product){
    // console.log(typeof product)
    if(typeof product !== 'object'){
        return `Please provide Object`;
    }
    else if(!product.name || !product.price){
        return `Must be filled`
    }
    const price = product.price;
    return price
}

console.log(getPrice({name: 'Kamal', price: 20, color: 'black'})); */



