var obj = {
    name: 'Hero Alom',
    age: 25,
    movie: 'kala manik',
    newObj: {
        favColor:'white',
        favsong: "shuni na"
    } 
};

delete obj.movie;
// var x = obj.newObj.favsong;
// console.log(x);
// console.log(obj);


// Object.freeze(obj);
// obj.name = "Shakib Khan";

// console.log(obj);


var shoppingCart = {
    books: 3,
    keyboard: 4,
    sunglass: 5,
    mouse: 2,
    pen: 3
};

// console.log(shoppingCart);

var properties = Object.keys(shoppingCart)
// console.log(properties);

// var propertyValue = Object.values(shoppingCart);
// console.log(propertyValue);

// bracket notation
   var book = shoppingCart['books'];
//    console.log(book);

var propertyName =  'mouse';
// console.log(propertyName, shoppingCart[propertyName]);


// var shoppingCart = {
//     books: 3,
//     keyboard: 4,
//     sunglass: 5,
//     mouse: 2,
//     pen: 3
// };


// Most important ekTa WebAssembly,evabeo value khoja jay

// 1st system
// shoppingCart.mouse = 15;
// console.log(shoppingCart);

// 2nd system
/* shoppingCart['mouse'] = 15;
console.log(shoppingCart); */

// 3rd system Na bujhle drive e ja
// shoppingCart[propertyName] = 11;
// console.log(shoppingCart);
// var propertyName = 'mouse';
// shoppingCart[propertyName] = 22;
// console.log(shoppingCart)