// let a;
// console.log(a);

const obj = {
    name: 'jamal',
    age: 12,
    info: {school: {address: 'kaptai', name: "SN"}}
}

const {name, ...others} = obj
console.log(others);