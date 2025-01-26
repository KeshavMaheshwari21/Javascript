
// {} --> scope (function, if-else)

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30

let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner :", a); // Inner : 10
}
console.log("Outer :", a); // Outer : 300


function one(){
    const username = "abcdef"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // ReferenceError: website is not defined
    two()
}
one() // abcdef


if(true){
    const username = "hijklm"
    if(username === "hijklm"){
        const website = " youtube"
        console.log(username + website); // hijklm youtube
    }
}

// **********************************************************

addOne(5) // 6
function addOne(number){
    return number+1
}


addTwo(2) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(number){
    return number + 2
}