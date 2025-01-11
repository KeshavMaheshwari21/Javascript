// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

const bigNumber = 11321321313131313n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "abc",
    age: 22
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber); // bigint
console.log(typeof outTemp); // objrct
console.log(typeof scoreValue); // number
console.log(typeof myFunction); // function
