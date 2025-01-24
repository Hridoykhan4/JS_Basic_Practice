/* Task -1:
Find the lowest number in the array below. const heights2 = [167, 190, 120, 165, 137]; */

/* function lowestHeight(heights){
   let minHeight = heights[0];

   for (const height of heights) {
        if(height < minHeight){
            minHeight = height;
        }
   }
   return minHeight
}

const heights2 = [167, 190, 120, 165, 137];
console.log(lowestHeight(heights2)) */

/* Task -2:
Find the friend with the smallest name. const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; */

/* function smallName(heights){
    let smallest = heights[0];

    for (const names of heights){
        if(names.length < smallest.length){
            smallName = names;
        }
    }
    return smallName;
}


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallName(heights2)) */

/* Your task is to calculate the total budget required to buy electronics:

laptop = 35000 tk
tablet = 15000 tk
mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. */

/* 
function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPrice  = 35000;
    const tabletPrice  = 15000;
    const mobilePrice  = 20000;

    const totalBudgetNeed = laptopPrice * laptopQuantity + tabletPrice * tabletQuantity + mobilePrice * mobileQuantity;
    return totalBudgetNeed;
}

console.log(calculateElectronicsBudget(1,1,1)) */

/* Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
]; */
/* function findAveragePhonePrice(mobiles){
    let sum = 0;
    for (const mobile of mobiles) {
       sum += mobile.price; 
    }
   return sum / mobiles.length;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
]; 
console.log(findAveragePhonePrice(phones)) */

/* Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ]; */

/*    function totalSalary(employees){
        let sum = 0;
        for(const salary of employees){
            const currentSalary = salary.starting + (salary.increment * salary.experience);

            sum += currentSalary;
        }

        return sum;
    }




        const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ]; 
 */
console.log(totalSalary(employees));
