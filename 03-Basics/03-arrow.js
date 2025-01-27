
// "this" is used to refer the current context
const user = {
    username: "abcxyz",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcomw to website !`)
    }

}
user.welcomeMessage // No Output
user.welcomeMessage() // abcxyz, welcomw to website !

user.username = "defghij" // changing the username
user.welcomeMessage() // defghij, welcomw to website !

console.log(this); // {}

function one(){
    let username = "keshav"
    console.log(this.username); // undefined
    console.log(this); // <ref *1> Object [global] {
                        //     global: [Circular *1],
                        //     clearImmediate: [Function: clearImmediate],
                        //     setImmediate: [Function: setImmediate] {
                        //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
                        //     },
                        //     clearInterval: [Function: clearInterval],
                        //     clearTimeout: [Function: clearTimeout],
                        //     setInterval: [Function: setInterval],
                        //     setTimeout: [Function: setTimeout] {
                        //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
                        //     },
                        //     queueMicrotask: [Function: queueMicrotask],
                        //     structuredClone: [Function: structuredClone],
                        //     atob: [Getter/Setter],
                        //     btoa: [Getter/Setter],
                        //     performance: [Getter/Setter],
                        //     fetch: [Function: fetch],
                        //     crypto: [Getter]
                        // }
}
one()

// arrow function
const two = () => {
    let username = "keshav"
    console.log(this.username); // undefined
    console.log(this); // {}
}
two()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)); // 7

// implicit return
const implicitAddTwo = (num1, num2) => ( num1 + num2 )
console.log(implicitAddTwo(5, 4)); // 9



