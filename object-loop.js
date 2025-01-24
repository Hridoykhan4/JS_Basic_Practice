const mobile = {
  brand: "Samsung",
  price: 25000,
  color: "black",
  camera: "12MP",
};

const keys = Object.keys(mobile);
// console.log(keys)

for (const key of keys) {
  // console.log(`${key} : ${mobile[key]}`)
  // console.log(key)
}

// for(const key in mobile){
//     console.log(key);
//     console.log(mobile[key])
// }

for (const key in mobile) {
  // console.log(key,':',mobile[key])
}

// const keys = Object.keys(mobile);
// console.log(keys);

// for (const key of keys){
//     console.log(key, ':', mobile[key])
// }

// for only gettting the properties
// for(const prop in mobile){
//     console.log(prop)
// }

// for getting prop and values easiest way
// for(const prop in mobile){
//     console.log(prop , ':', mobile[prop]);
// }

/* Third Option
const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ":", mobile[key])
} */

const pencil = new Object();
// console.log(typeof pencil)

const zoo = {
  lion: "meat",
  panda: "bamboo",
};

// console.log(Object.keys(zoo))

// let animal = 'lion';
// zoo[animal] = 'Shingho';
// console.log(zoo);

// var animal = 'lion';
// console.log(zoo[animal])
