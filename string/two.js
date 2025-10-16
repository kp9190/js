// ==> Template Strings 
// 1. Use Template string to print a message that includes variables.

var fname = "kneil";
var lname = "patel";

// console.log(`Hello ${fname} ${lname}, this is a Template string `);
// console.log('Hello ${fanme} ${lname}, this is a Template string ');

// 2. Create a multi-line sting using Template string.

console.log(`Hello ${fname} ${lname}  Hello ${fname} ${lname}`);

var s = ` Hello this is js session
my session                       starting on 


5 pm
`

// var k = "Hello is is js Session"

console.log(s);

// 3. Use template string to create a formatted address from separate variables.

var hno = 101;
var soc = "Pramukh Tengent";
var locations ="GNR";
var nation = "India";

console.log(`Add : 
    ${hno}, ${soc}
    ${locations}, ${nation}`);

// 4. Use template string  to create an html SVGAnimatedPreserveAspectRatio.

// console.log(`
//     <b>Hii </b> jeel?
//     `);


document.writeln(`
    <b>Hii </b> ${fname}
    `);

// ### Template Strings
// 1. Create a template string that includes your name and age.
// 2. Use template strings to concatenate two strings.
// 3. Create a multi-line template string with a quote on each line.
// 4. Write a function that takes a first name and last name and returns a full name using template strings.
// 5. Use template strings to create a sentence that includes the length of a string.

