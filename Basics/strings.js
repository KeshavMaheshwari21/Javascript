const name = "abcdef"
const repoCount = 20

// console.log(name + " " + repoCount + " value");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("ghi-jkl-mno") // another way of declaring String

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); // to get the length of the string (gameName)

console.log(gameName.toUpperCase()); // to convert the string in Uppercase but not makes any changes in the original string

console.log(gameName.charAt(2)); // to check the character at the given index

console.log(gameName.indexOf('i')); // to check the index where the character is

const newString = gameName.substring(0, 4) // to break the string into substring by passing the starting and the ending index and the ending index is not included
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newString1 = "    def    "
console.log(newString1);
console.log(newString1.trim()); // removes the starting and ending space from the string

const url = "https://abc.com//abc%20def"
console.log(url.replace('%20', '-')); // to replace any string from another string

console.log(url.includes('abc')); // does our string includes any passed substring returns true / false

console.log(gameName.split('-')); // to split the string from any character and put the substring in the array

