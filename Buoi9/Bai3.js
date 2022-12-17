var courses = ['C++', 'Java', 'Javascript'];

// Cau 1
const addCourse = (courses, course) => {
    courses.push(course);
}
addCourse(courses, 'Go');
console.log(courses) //output: [ 'C++', 'Java', 'Javascript', 'Go' ]

// Cau 2
const getFirstElement = courses => {
    return courses[0];
}
var firstElement = getFirstElement(courses);
console.log(firstElement) //output: C++;

// Cau 3
const joinArr = (courses, char) => {
    const len = courses.length;
    let result = '';
    for (let i = 0; i < len - 1; i++) {
        result += courses[i] + char;
    }
    if (len) result += courses[len - 1];
    return result;
}
var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ");
console.log(result1); //output: C++,Java,Javascript,Go
console.log(result2); //output: C++ * Java * Javascript * Go