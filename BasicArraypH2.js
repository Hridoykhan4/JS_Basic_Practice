// Includes
const friends = ["Kamal", "Khailam", "Salam", "Jamal"];
console.log(friends.includes("Kamal"));

if (friends.includes("Khailam")) {
  console.log("party");
} else console.log("Upash");

// Index of
console.log(friends.indexOf("Salam"));

// If not found then it will return -1
console.log(friends.indexOf("jabbar"));

// To check whether it is an array or not
const car = ["BMW", "Bugatti", "Ferrari", "Marcedes", "Toyota"];
console.log(car.join(" | "));
console.log(Array.isArray(car));

// Concat
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(arr1.concat(arr2));

// Slice
console.log(car.slice(2, 4));
