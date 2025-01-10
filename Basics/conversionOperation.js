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