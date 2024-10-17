// Import the functions from both the modules and use them to perform arithmetic operations on numbers

// declare and initialize 'x' and 'y'
const x = parseFloat(prompt("Enter the first number: "));
const y = parseFloat(prompt("Enter the second number: "));

// import 'add', 'subtract', and 'multiply'
import {add, subtract} from "./namedOperations.js";
import {multiply} from "./defaultOperations.js";


// call the functions
console.log(`Addition: ${add(x, y)}`);
console.log(`Subtraction: ${subtract(x, y)}`);
console.log(`Multiplication: ${multiply(x, y)}`);