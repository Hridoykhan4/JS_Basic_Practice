var obj1 = {
  books: 5,
  keyboard: 4,
  sunglass: 3,
  shoes: 3,
  pen: 3,
  bottle: 3,
};

const keys = Object.keys(obj1);

// console.log(keys);

// ebar dekhbo value gula k

// let objValue = Object.values(obj1);
// console.log(objValue);

// Hard One
/* 
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], ":", obj1[keys[i]]);
} */

// for(let i = 0; i < keys.length; i++){
//     let propertyName = keys[i];
//     let propertyValue = obj1[propertyName];
//     console.log(propertyName+ " : "+ propertyValue);
// }

// easy one
for(const propertyName in obj1){
    // console.log(propertyName);
    // var value = obj1[propertyName];
    // console.log(value);
    console.log(propertyName, ':', obj1[propertyName])
}
