console.log("Hello console")

/*
- Assign name 'Mark' to variable called `name`
- console log, 'Hello Mark'
*/

// var name = "Mark";
// console.log("Hello" + " " + name);

// name = "Anthony";
// console.log("Hello " + name);

// name = "Jeb";
// console.log("Hello " + name);

/*
function <funtionName>(<arguments>) {
	<function body>
	return <results>
}


(inputs) --> [function] --> (output)
*/

function greeter(name) {
	var greeting = "Alo " + name;
	return greeting;
}

// function greeter(name) {
// 	return "Hello " + name;
// }

var name = "Mark";
console.log(greeter(name));
console.log(greeter("Anthony"));
console.log(greeter("Jane"));
console.log(greeter("John"));
console.log(greeter("Jack"));
console.log(greeter("James"));

// JS datatypes

var n = "Mark";
var x = 20;
var isStudent = false;
var start = null;
var student = {
	name: 'Mark',
	course: 'Prep Course Web',
	school: 'Thinkful',
};
var j;

// main JS datatypes
console.log('n: ', n, typeof n);
console.log('x: ', x, typeof x);
console.log('isStudent: ', isStudent, typeof isStudent);
console.log('start: ', start, typeof start);
console.log('j: ', j, typeof j);
console.log('student: ', typeof student);

