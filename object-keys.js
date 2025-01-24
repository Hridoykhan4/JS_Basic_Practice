let laptop = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  hdd: "512GB",
};

const keys = Object.keys(laptop);
console.log(keys);

for (let key in laptop) {
  console.log(`${key} : ${laptop[key]}`);
}

// Values getting
// let values = Object.values(laptop)
// console.log(keys)

// Key getting
// let keys = Object.keys(laptop)
// console.log(keys)

const value = Object.values(laptop);
// console.log(value)
