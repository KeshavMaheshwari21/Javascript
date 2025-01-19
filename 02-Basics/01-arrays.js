// ++++++++++++++++++ Array ++++++++++++++++++
// JS arrays are resizeable and can contain a mix of different data-types. 
// JS arrays are zero indexed
// JS array-copy-operation create shallow copies(reference is same)

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[0]); // 0

const myHero = ['shaktiman', 'naagraj']

const myArray2 = new Array(2, 3, 4, 5);

// Array methods

myArray.push(6); // To add the value in the array
console.log(myArray); // [0, 1, 2, 3, 4, 5, 6]

myArray.pop() // to remove the last element from the array
console.log(myArray); // [0, 1, 2, 3, 4, 5]

myArray.unshift(9) // to add the element at first of the array
console.log(myArray); // [9, 0, 1, 2, 3, 4, 5]

myArray.shift() // to remove the first element from the array
console.log(myArray); // [0, 1, 2, 3, 4, 5]

console.log(myArray.includes(1)); // to check weather the array includes any element in array or not (true/false)

console.log(myArray.indexOf(1)); // to find the index of the element in the array if element is not present then return -1

const newArr = myArray.join()
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); // string

// slice , splice

console.log("A ", myArray); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArray.slice(1, 3)
console.log(myn1); // [ 1, 2 ]
console.log("B ", myArray); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray.splice(1, 3)
console.log(myn2); // [ 1, 2, 3 ]
console.log("C ", myArray); // C  [ 0, 4, 5 ]