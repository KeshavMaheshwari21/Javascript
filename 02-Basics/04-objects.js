// const tinderUser = new Object();

// console.log(tinderUser); // {}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "hello"
tinderUser.isLoggedIn = "false"

console.log(tinderUser); // { id: '123abc', name: 'hello', isLoggedIn: 'false' }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "keshav",
            lastname: "maheshwari"
        }
    }
}

console.log(regularUser.fullname); // { userfullname: { firstname: 'keshav', lastname: 'maheshwari' } }

console.log(regularUser.fullname.userfullname.firstname); // keshav

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {...obj1, ...obj2}
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

console.log(users[0].email); // a@gmail.com

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)); // [ '123abc', 'hello', 'false' ]

console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'hello' ], [ 'isLoggedIn', 'false' ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

console.log(tinderUser.hasOwnProperty('isLoggedOut')); // false