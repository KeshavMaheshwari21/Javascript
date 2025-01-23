// Objects De-Structure

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Hello"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor); // Hello

const {courseInstructor: instructor} = course
console.log(instructor); // Hello

//           JSON

// {
//     "name": "kbcdef",
//     "coursename": "b-tech",
//     "price": "free"
// }