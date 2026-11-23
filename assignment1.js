// 1. Convert the string "123" to a number and add 7
const result1 = Number("123") + 7;
console.log(result1); // 130

// 2. Check if the given variable is falsy and return "Invalid" if it is
function checkFalsy(val) {
  if (!val) {
    return "Invalid";
  }
  return val;
}
console.log(checkFalsy(0)); // "Invalid"

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); // 1, 3, 5, 7, 9
}

// 4. Create an array of numbers and return only the even numbers using filter method
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 5. Use the spread operator to merge two arrays, then return the merged array
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)
function getDayOfWeek(dayNum) {
  switch (dayNum) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
console.log(getDayOfWeek(2)); // "Monday"

// 7. Create an array of strings and return their lengths using map method
const strings = ["a", "ab", "abc"];
const lengths = strings.map((str) => str.length);
console.log(lengths); // [1, 2, 3]

// 8. Write a function that checks if a number is divisible by 3 and 5
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(checkDivisible(15)); // "Divisible by both"

// 9. Write a function using arrow syntax to return the square of a number
const square = (num) => num * num;
console.log(square(5)); // 25

// 10. Write a function that destructures an object to extract values and returns a formatted string
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log(formatPerson(person)); // 'John is 25 years old'

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum
function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess().then((msg) => console.log(msg)); // "Success" (after 3 seconds)

// 13. Write a function to find the largest number in an array
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 3, 7, 2, 4])); // 7

// 14. Write a function that takes an object and returns an array containing only its keys
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys({ name: "John", age: 30 })); // ["name", "age"]

// 15. Write a function that splits a string into an array of words based on spaces
function splitWords(sentence) {
  return sentence.split(" ");
}
console.log(splitWords("The quick brown fox")); // ["The", "quick", "brown", "fox"]

/******************B. Part 2:******************/
/*
1. What is the difference between forEach and for...of? When would you use each?

- forEach: An array method that loops over all elements, cannot use break/continue, and does not work properly with async/await. Use it for simple operations on every item.
- for...of: A loop for any iterable (arrays, strings, etc.) that supports break/continue and works sequentially with async/await. Use it when you need early exit or async operations.
 
____________________________________________________________________________________________

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

- Hoisting: Moving declarations to the top of their scope before execution (var is hoisted as undefined; let/const are hoisted uninitialized).
- TDZ: The period before a let/const variable is initialized, where accessing it throws a ReferenceError.

Example:
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError (TDZ)
let b = 10; 


____________________________________________________________________________________________


3. What are the main differences between == and ===?

- == (Loose Equality): Compares values only after automatic type coercion (e.g., "5" == 5 is true).
- === (Strict Equality): Compares both value and data type without conversion (e.g., "5" === 5 is false).
 

____________________________________________________________________________________________


4. Explain how try-catch works and why it is important in async operations.

- How it works: Code inside try runs normally; if an error occurs, execution jumps to catch(error) to handle it without crashing the program.
- Importance in async: Async operations (like API calls or database queries) can fail due to network or server issues. try-catch catches rejected promises cleanly when using async/await.
____________________________________________________________________________________________


5. What’s the difference between type conversion and coercion? Provide examples of each.

- Type Conversion (Explicit): Manually converting a data type by the developer (e.g., Number("10") -> 10).

- Type Coercion (Implicit): Automatic type conversion done by JavaScript during operations (e.g., "5" + 2 -> "52", or "5" - 2 -> 3).

*/
