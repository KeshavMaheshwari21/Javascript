// singleton 
// Object.create

// object literals
const JsUser = {
    name: "abcdef",
    age: 18,
    location: "Jaipur",
    email: "abcdef@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser.email); // abcdef@gmail.com

console.log(JsUser["email"]); // abcdef@gmail.com

JsUser.email = "def@gmail.com"
// Object.freeze(JsUser) // the value of the JsUser object will not be further modified due to freeze function
JsUser.email = "defghi@gmail.com"

console.log(JsUser.email); // def@gmail.com

JsUser.greeting1 = function(){
    console.log("Hello Js User!");
    
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User!, ${this.name}`);
    
}

console.log(JsUser.greeting1); // [Function (anonymous)]

// Un-Comment the freeze function and run the file then the greeting will be a function
console.log(JsUser.greeting1()); // Hello Js User!

console.log(JsUser.greeting2()); // Hello Js User!, abcdef