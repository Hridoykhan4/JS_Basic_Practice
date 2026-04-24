// console.log('Start');
// setTimeout(() => {
//     console.log('Timeout');
// }, 0)
// console.log('End');

/* JS is a single threaded --- one call stack, one thing at a time. But i offloads waiting work to the web API so it doesn't sit idle. 
Thats how it feels multitasking without actually being it

Four Players
1.Call Stack
2. Web API
3.Callback Queue
4.Event Loop


WEB API == The Browser or node giving JS superpowers -- timers, network requests, file reading. JS lands tasks off here & moves on

Call Stack == Where JS actually executes code.Its a stack -- last in first out. JS can only do one thing here at a time

Callback QUEUE == When a web api task finishes, it doesn't go straight back to JS. It waits in the queue, like a waiting room

Event Loop == The Bouncer. It has one job --Check if the call stack is empty . Only then does it let someone from the queue in
*/

// function one () {
//     two()
// }

// function two () {
//     three()
// }

// function three () {
//     console.log('One');
// }

// one()

// console.log(a);

// let a = 10

// var a = 10;

// var a = 20;


// console.log(a); == 20


let a = 120; // reassign
a = 140;
// console.log(a);

const b = 400; //can not redeclare also reassign
// b = 20
// console.log(b);

// x = 20

// let x; // Hoisted hy na
// console.log(x);


var x  = 20 // function, hoisted,  redeclare
for(let x = 0; x < 3; x++ ) { // i var then it reinitiate but if we use let it doesn't get hoisted

}
console.log(x); // 3