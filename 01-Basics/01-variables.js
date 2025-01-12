
const accountId = 14455
let accountEmail = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 23322 --> TypeError: Assignment to constant variable.

accountEmail = "hi@gmail.com"
accountPassword = "54321"
accountCity = "Delhi"

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])