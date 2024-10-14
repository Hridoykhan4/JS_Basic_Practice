// write a program to calculate average upto 2 decimal
let math = 75.25;
let bio = 65;
let chem = 80;
let phy = 35.45;
let bangla = 99.50;

let avg = (math + bio + chem + phy +bangla) / 5;

console.log(avg.toFixed(2));

// john teacher gave him two variables.Each variable contains a String,combine them and print them in one line

let first = "I am going to be "
let second = "an awesome web developer";
console.log(first + second);

// sarahs mom testing sarah to find modulas

let number = 119;
let div = number % 5;
console.log(div);


// You will create a program that calculates the total cost of items in a shopping cart, including tax. This will involve defining variables for the prices of different items, calculating the subtotal, applying tax, and calculating the final total.

let item1 = 400;
let item2 = 3400;
let item3 = 420;
let item4 = 410;
let item5 = 420;

let itemTotal = item1 + item2 +item3 + item4 +item5;



// calculate the tax
/* let taxRate = 0.2;
let tax = itemTotal * taxRate;

let totalFinal = itemTotal + tax;

console.log("SubTotal is : "+itemTotal);
console.log("Tax is : "+tax);
console.log("Total is : "+totalFinal);
console.log(); */

// You will create a program to track your daily expenses and calculate the total, average expense, and identify the highest and lowest expense.

/* 
let rent = 2150;
let breakfast = 20;
let lunch = 50;
let dinner = 100;
let groceries = 200;
let other = 100;

let dailyCost = rent + breakfast + lunch + dinner +groceries + other;

let avgExpense = dailyCost / 6;

let expense = [rent,breakfast,lunch,dinner,groceries,other]
let highExpense = Math.max(...expense);
let lowExpense = Math.min(...expense);

console.log("Total cost : "+dailyCost);
console.log("Average cost is " +avgExpense);
console.log("Highest Expense is "+highExpense);
console.log("Lowest Expense is  "+lowExpense);


// Understand the basic of non-preemptive.eTai non-primitive er khela,ekhane person r another duiTai same reference dharon kore...object stack memory ney na,heap memory ney,onek boro jayga niye rakhe
let person = {name : "Alice",
             address: "Dhaka"
};

let another = person;

person.address = "Chittagong";
person.name = "Kamal";

console.log(person);
console.log(another); */