//                 Functions

function sayMyName(){
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log();
}
sayMyName()


function addTwoNumbers1(number1, number2){ // parameters
    console.log(number1 + number2);
}
addTwoNumbers1(2, 4) // 6 // arguments
addTwoNumbers1(2, "4") // 24 // arguments
const result = addTwoNumbers1(3, 4)
console.log("Result :",result); // Result : undefined


function addTwoNumbers2(number1, number2){
    let result = number1 + number2
    return result // return is used to return a value when the function is called
    // and code written after the return statement will not be executed
}
const result1 = addTwoNumbers2(2,3)
console.log("Result :",result1); // Result : 5


function addTwoNumbers3(number1, number2){
    return number1 + number2
}
const result2 = addTwoNumbers3(10,3)
console.log("Result :",result2); // Result : 13


function loginUserMessage(username = "xyz"){
    if(username === undefined){   // ---> if(!username)
        console.log("Please enter a Username !");
        return
    }
    return `${username} just logged in !`
}
console.log(loginUserMessage("Keshav")); // Keshav just logged in !
console.log(loginUserMessage()); // Please enter a Username !


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000)); // [ 500, 2000 ]

const user = {
    username: "abcdef",
    price: 199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user) // Username is abcdef and price is 199

handleObject({     // Username is xyzlmn and price is 150
    username: "xyzlmn",
    price: "150"
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([1, 2, 3, 4, 5])); // 2