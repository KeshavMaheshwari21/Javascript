// if

const isUserLoggedIn = true

if (2 == "2"){
    console.log("Executed");
    
}

if (2 === "2"){ // strict equlas to (also checks the datatype)
    console.log("Strict Checked");
    
}

// <, >, <=, >=, ==, ===, !=, !==

const temperture = 41
if (temperture < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than or equal to 50");
}

const score = 200;
if (score > 100) {
    const power = "fly"
    console.log(`Power : ${power}`);
}
// console.log(`Power : ${power}`); // ReferenceError: power is not defined

const balance = 1000

if (balance > 500) console.log("Balance Greater than 500!"); // Implicit Declaration

if (balance < 500) {
    console.log("Less than 500!");
} else if (balance < 750) {
    console.log("Less than 750"); 
} else {
    console.log("Less than 1200");
}

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard) {
    console.log("Allow to Buy Things!");
    
}






