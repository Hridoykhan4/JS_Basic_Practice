/* Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = { name: 'John Doe', age: 25, city: 'Example City', isStudent: true };

Output: key: name | type: string key: age | type: number key: city | type: string key: isStudent | type: boolean */

/* let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
}; */

 /*  for(const prop in myObject){
       console.log(`key: ${prop} | type: ${typeof myObject[prop]}`)
    } */

// Access the golden rod color value in output.
// const colors = {
//     red: "#ffff00",
//     green: "#ff0000",
//     blue: "#024205",
//     "golden rod": "#daa520"
// }
// console.log(colors["golden rod"]);

// For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car['Passenger Capacity'] = 5;
// console.log(car)

// Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks)

// Count the number of properties.

// Input:

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// const count = Object.keys(student).length;
// console.log(count);

// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
}

const key = Object.keys(myObject);

/* for(const key in myObject){
    console.log(key,":",myObject[key])
} */

for(i = 0;i <key.length; i++){
    let propertyName = key[i];
    propertyValue = myObject[propertyName];
    console.log(propertyName, ':', propertyValue)
}
