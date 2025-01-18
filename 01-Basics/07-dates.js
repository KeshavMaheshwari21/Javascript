// Dates

let myDate = new Date()

console.log(typeof myDate); // object

console.log(myDate.toString()); // Sun Jan 12 2025 12:26:32 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Sun Jan 12 2025

console.log(myDate.toISOString()); // 2025-01-12T06:57:58.359Z

console.log(myDate.toLocaleDateString()); // 12/1/2025

console.log(myDate.toLocaleTimeString()); // 12:28:57 pm

console.log(myDate.toLocaleString()); // 12/1/2025, 12:32:42 pm

console.log(myDate.toJSON()); // 2025-01-12T07:02:59.904Z

let myCreatedDate = new Date(2023, 0, 23) // creating specified date
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

myCreatedDate = new Date(2023, 0, 23, 5, 3) // specified time
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am

myCreatedDate = new Date('2023-01-14')
console.log(myCreatedDate.toLocaleString()); // 14/1/2023, 5:30:00 am

myCreatedDate = new Date('01-14-2023')
console.log(myCreatedDate.toLocaleString()); // 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1736666222194

console.log(myCreatedDate.getTime()); // 1673634600000

console.log(Math.floor(Date.now()/1000)); // 1736666483

let newDate = new Date()
console.log(newDate); // 2025-01-12T07:21:23.456Z

console.log(newDate.getMonth()); // 0

console.log(newDate.getDay()); // 0

console.log(newDate.toLocaleString('default', { 
    weekday : "long"
})); // Sunday
