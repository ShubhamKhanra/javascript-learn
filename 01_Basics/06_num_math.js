const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));// Output : 100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));// Output : 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); Output: 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));// Output : 4
console.log(Math.abs(4));// Output : 4
console.log(Math.round(4.6));// Output : 5
console.log(Math.ceil(4.2));// Output : 5
console.log(Math.floor(4.9));// Output : 4
console.log(Math.min(4, 3, 6, 8));// Output : 3
console.log(Math.max(4, 3, 6, 8));// Output : 8

console.log(Math.random());// Output will come between 0 to 1. Ex- 0.56729
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
