const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

// ********************* Maths ************************

console.log(Math);

console.log(Math.abs(-4)); // to convert the negative value into the positive

console.log(Math.round(4.6)); // to round off the number

console.log(Math.ceil(4.6)); // to choose the upper value

console.log(Math.floor(4.6)); // to choose the lower value

console.log(Math.min(1, 2, 3, 4, 5, 6)); // to find the minimum value from the array

console.log(Math.max(1, 2, 3, 4, 5, 6)); // to find the maximum value from the array

console.log(Math.random()); // to find the random value between 0 and 1

console.log(Math.floor(Math.random()*10) + 1); 

// To find the random value between the range 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);