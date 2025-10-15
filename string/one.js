// string 

// var str = "Rajesh";
// var str1 = 'rajesh';

// console.log(str1);
// console.log(typeof str1);

// console.log(str);// index


// string methods

var str = "Rajesh"; // h
var str1 = "My Name is Rajesh"; // h

// console.log(str);
// console.log(str1);


// 1. length

// console.log(str.length); // find length 
// console.log(str1.length); // count the spas all so..

// 2. charAt

// console.log(str.charAt(5)); // index value
// console.log(str1.charAt()); // index value

// 3. chaCodeAt

// console.log(str.charAt(1)); // index value
// console.log(str.charCodeAt(0)); // index value ascii code

// 4. endsWith

// console.log(str.endsWith('s')); // return true / false  
// last char  

// 5. startsWith 

// console.log(str.startsWith("r")); // case R and r not a same
// console.log(str.startsWith("R")); // char start index t/f

// 6. indexOf

// console.log(str.indexOf("j")); // to search string index
// not in string -1 return 

// console.log(str.indexOf("a")); // point the index of first char

// 7. lastIndexof

// console.log(str.lastIndexOf("a"));

// 8. replace

// console.log(str.replace("a","A"));
// console.log(str1.replace("a","A"));

// 9. replace All

// console.log(str1.replaceAll("My","A"));

// 10. splite

// var demo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quisquam est praesentium maxime, adipisci totam ipsa esse repellendus. Cupiditate, quaerat quo voluptatum hic illo necessitatibus iusto doloribus cum aut!";

// console.log(demo.split("."));

// 11.toLowerCase  && toUpperCase

// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());

// 12. trim
// var demo = "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quisquam    est praesentium maxime, adipisci totam ipsa esse repellendus. Cupiditate, quaerat quo voluptatum hic illo necessitatibus iusto doloribus cum aut!            "

// console.log(demo.trim());

// 13. trimEnd && trimStart

// console.log(str1);
// console.log(str1.trimEnd());
// console.log(str1.trimStart());

// 14. slice

// var demo = str1.slice(3,7); // slice(include, exclude)
// console.log(demo);// index 
// console.log(typeof demo);



// 15. substring
// var demo = str1.substring(0,5);
// console.log();// substring(include, exclude)
// console.log(typeof demo);


// 16. concat()

// var demo =  str.concat(" ",str1);
// console.log(demo);

// 17. str[]

// console.log(str[5]);





// var str= "is a versatile programming language used in web development. It allows developers to build dynamic and interactive websites. Learning JavaScript opens doors to many career opportunities.";


// Find the length of the paragraph.
// → Which string method can you use?
// console.log(str.length);


// Convert the entire paragraph to uppercase.
// → What method transforms all characters to uppercase?
// console.log(str.toUpperCase());

// Check if the word "JavaScript" appears in the paragraph.
// → Which method helps you find or check substrings?


// Find the index of the first occurrence of the word "developers".

// Extract the first sentence from the paragraph.
// (Hint: Use a method that finds the position of a period, then extract up to that point.)

// Replace the word "versatile" with "powerful".

// Check if the paragraph ends with the word "opportunities."

// Count how many times the word "JavaScript" appears.

// var count = str.split("JavaScript").length - 1;
// console.log(str.split("JavaScript"));

// var demo = " "
// console.log(count);


var str = "this is Neha Kapadi,this is kenil patel, this is rajesh";
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));

// console.log(str.split("this").length);



// console.log("JavaScript".slice(4,9));

// Replace every vowel (a, e, i, o, u) in "developer" with *.
// Methods: replaceAll(),

console.log("developer".replaceAll('e','*').replaceAll('i','*').replaceAll('o','*').replaceAll('a','*'));

