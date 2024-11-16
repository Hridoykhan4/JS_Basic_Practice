/* // var name = "Hero's";
// console.log(name)


var first = 0.1;
var second = 0.2;
// console.log((first+second).toFixed(4));
// console.log(50/0);

// var name = 4.2152145;

// console.log(name.toFixed(3));

// var onionPrice = 20;
// var eggPrice = 10;
// var totalPrice = onionPrice - eggPrice;
// console.log(totalPrice)

// var price = 35;
// price += 10;
// console.log(price)

// console.log('40'+2+'30'+(22+11));

var first = 'Mobarok';
var second = 'Tobarok';
// console.log(first.concat(' ',second))


// var name = "Hero\"s";
// console.log(name)


// var actor = "Shahrukh";
// console.log(typeof(actor))

// var x = 10;
// console.log(typeof x);

// var isSUbs = typeof true;
// console.log(isSUbs);

// var eggPrice = 10;
// var onionPrice = 12;


// var price = 10;
// price += 10;

// var newPrice = price + 50;
// console.log(newPrice);

let x = '10abc';
let num = Number(x);
// console.log(num)

let z = '10abc';
console.log(parseInt(z));  // 10 (ignores the 'abc');
// console.log(Number(z));


let sum = 0;
for(let i = 78; i <=98; i+=2){
    sum += i;
}

// console.log(sum) */

const bottle = {
    color: 'white',
    price: 45,
    brand: 'apple',
    isClean: true,
    accelerate: function(){
       return 'Car is Movin'
    },
    unique: {
        gpa: 5,
        merit: 'top'
    },
    favPlaces: ['kualalampur', 'sonapur']
}

const keys = Object.keys(bottle);
for (const key of keys) {
    console.log(key)
}
