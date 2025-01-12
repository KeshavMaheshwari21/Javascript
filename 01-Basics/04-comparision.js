console.log(2 > 1); //-> true
console.log(2 >= 1); //-> true
console.log(2 < 1); //-> false
console.log(2 <= 1); //-> false
console.log(2 == 1); //-> false 
console.log(2 != 1); //-> true

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// NOTE :- The reason is that an equility check == and comparisions < > >= <= work differently.
// Comparisions convert null to a number, treating it as 0. That's why >= 0 is true and null > 0 is false.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === -> Strictly checks the value with its datatypes also

console.log("2" == 2); // true (datatype is not checked)
console.log("2" === 2); // false (datatype is also checked)

