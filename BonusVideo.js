const student = {
  name: "Shakib Khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["Apu", "Raj", "Salman", "aamir"],
  movies: [
    { name: "no. 1", year: 2015 },
    { name: "king Khan", year: 2018 },
  ],
  act: function () {
    console.log("Active Like Sakib khan");
  },
  car: {
    brand: "tesla",
    price: 500000,
    made: 2025,
    manufacturer: {
      name: "Tesla",
      ceo: "Elon Mask",
      country: "USA",
    },
  },
};

// console.log(student)
student.act();

// Array like Objects
/* function add(num1, num2){
    console.log(num1, num2)
    console.log(arguments);
    console.log(arguments[3])
}

add(11, 33, 111,232); */

// Matched.js
const numbers = [45, 54, 23, 55, 22];

/* for(let i = 0; i <numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}
 */

/* for(const number of numbers){
    console.log(number)
} */

const products = [
  { id: 1, name: "Xiaomi phone", price: 19000 },
  { id: 2, name: "walton laptop", price: 19000 },
  { id: 3, name: "walton laptop", price: 19000 },
  { id: 4, name: "walton laptop", price: 19000 },
  { id: 5, name: "walton Laptop", price: 19000 },
  { id: 6, name: "walton phone", price: 19000 },
  { id: 7, name: "walton phone", price: 19000 },
  { id: 8, name: "walton Phone", price: 19000 },
];
/* 
for(const product of products){
    console.log(product)
}
 */
console.log(matchedProducts(products, "XiaoMi"));

/* function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.unshift(product);
    }
  }
  return matched;
} */
