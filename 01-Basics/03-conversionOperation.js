let score = "33a"

console.log(typeof score);
// console.log(typeof (score)); 

let valueInNumber = Number(score) // converting the score in the number datatype

console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN -> Not a Number

// "33" --> 33
// "33abc" --> NaN
// true --> 1 : false --> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true : 0 -> false
// "" -> false
// "abc" -> true

let someNumber = 11

let stringNumber = Number(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************* Operations *******************

let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2 + 2); -> Addition
// console.log(2 - 2); -> Subtraction
// console.log(2 * 2); -> Multiplication
// console.log(2 / 2); -> Division
// console.log(2 ** 3); -> Power
// console.log(2 % 2); -> Modulus

let str1 = "hello"
let str2 = " abc"
let str3 = " def"

let str4 = str1 + str2 + str3 // addition of the 2 (or more) string is possible not the subtraction
console.log(str4);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1
console.log(false); // false
console.log(+false); // 0

let gameCounter = 100
gameCounter++;
console.log(gameCounter);