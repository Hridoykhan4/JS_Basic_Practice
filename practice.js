var item1 = {
    name: "Apple",
    quantity: 6
};

var item2 = {
    name: "Banana",
    quantity: 10
};

var item3 = {
    name: "Orange",
    quantity: 10
};

const inventory = [item1,item2,item3];
console.log(inventory)

let item4 = {
    name: "Grape",
    quantity: 8
};

inventory.push(item4);
for(let i = 0; i <inventory.length; i++){
    if(inventory[i].name === 'Orange'){
        inventory[i].name = 'komola';
    }
}
console.log(inventory)

/* 
console.log(inventory);

let item4 = {
    name: "Grape",
    quantity: 8
};

inventory.push(item4);

console.log(inventory);


for(i = 0; i < inventory.length; i++){
    if(inventory[i].name === 'Banana'){
        inventory[i].quantity = 20;
        break;
    }
}

console.log(inventory);

for(i = 0; i< inventory.length; i++){
    if(inventory[i].name === 'Orange'){
        inventory[i].quantity = 13;
    }
}

console.log(inventory);

for(i = 0; i < inventory.length; i++){
    console.log("Fruit : ",inventory[i].name);
    console.log("Quantity : ",inventory[i].quantity);
}

 */