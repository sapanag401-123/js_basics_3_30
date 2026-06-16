/*
Array method - are built-in function which is used to manipulate, transform, 
search and manage collection of data efficiency with the help of javascript
*/
// 1.push-Add one or more element at the end of an array and modifies the orginal array

let fruit = ['apple', 'banana']
fruit.push('orange');
console.log(fruits); 

//2. pop- remove the element at the end of an array
let fruits = ["Apple", "Banana", "Orange"];
let lastFruit = fruits.pop(); 

console.log(lastFruit); // Output: "Orange"
console.log(fruits);    // Output: ["Apple", "Banana"]

//3. unshift-add at the beginning of an array
let fruits = ["Banana", "Orange"];
fruits.unshift("Apple"); 

console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

//4. shift-remove at the beginning of an array
let fruits = ["Apple", "Banana", "Orange"];
let firstFruit = fruits.shift(); 

console.log(firstFruit); // Output: "Apple"
console.log(fruits);     // Output: ["Banana", "Orange"]
 
//Transforming Arrays - transform and create new structure
//1. map()->Creates a new array by applying a function to every element of the original array
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2); 

console.log(doubled); // Output: [2, 4, 6, 8]

//2. filter()->Creates a new array containing only the elements that pass a specified condition.
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0); 

console.log(evenNumbers); // Output: [2, 4]

//3.reduce()Executes a callback function on each element to condense the array down into a single value.
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

console.log(sum); // Output: 10


//Searching & Verifying Element(Use these methods when we need to check the contents of an array or extract specific values.
// 1.find() ->Returns the first element in the array that satisfies a testing function. If no elements match, it returns undefined.)
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10); 

console.log(found); // Output: 12


//2.includes() ->Checks if an array contains a specific value and returns true or false.
let languages = ["HTML", "CSS", "JavaScript"];
let hasCSS = languages.includes("CSS"); 

console.log(hasCSS); // Output: true

//3. indexOf() ->Returns the first index at which a given element is found. It returns -1 if the item does not exist.
let fruits = ["Apple", "Banana", "Orange"];
let index = fruits.indexOf("Banana"); 

console.log(index); // Output: 1

//Advanced Manipulation11.
//1. slice() ->Extracts a shallow copy of a portion of an array into a new array object. 
// The original array is not modified.
// Parameters: (startIndex, endIndex) — note that endIndex is exclusive.
let animals = ["Camel", "Duck", "Elephant", "Cat", "Dog"];
let selected = animals.slice(1, 4); 

console.log(selected); // Output: ["Duck", "Elephant", "Cat"]

//2. splice()Changes the contents of an array by removing, replacing, or adding elements in place (mutates original array).
// Parameters: (startIndex, deleteCount, item1, item2, ...).
let months = ["Jan", "March", "April", "June"];

// Insert "Feb" at index 1, delete 0 elements
months.splice(1, 0, "Feb"); 
console.log(months); // Output: ["Jan", "Feb", "March", "April", "June"]

// Replace 1 element at index 4 with "May"
months.splice(4, 1, "May"); 
console.log(months); // Output: ["Jan", "Feb", "March", "April", "May"]
