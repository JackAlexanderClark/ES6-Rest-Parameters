/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call. Consider situation where you want to add some numbers together.

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
// Summation equals 6, 1 + 2 + 3.
console.log("sum", sum);  

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
// The console logs 6, because function sumAll is defined above and only accepts the first parameters! This is where the ...rest comes in.
console.log("sum2", sum2);

// Function using ...rest. Will use a for loop to iterate through the array
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    // Using a for of loop
    for (let i of rest) {
        // Adding each additional number to the sum
        sum += i
    }
    return sum;
}
let sum3 = sumRest(1, 2, 3, 4, 5, 6);
// Logs the correct sum of 21
console.log("sum3", sum3);