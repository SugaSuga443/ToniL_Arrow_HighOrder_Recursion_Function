/* Exercise #1, Function 1
function greet(name) {
   return "Hello, " + name + "!";
}*/
const greet = (name) =>{
    return `Hello, ${name}!`;
}// arrow function with template literals
console.log(greet("Matteo"));

/* Exercise #1, Function 2
function square(number) {
   return number * number;
}*/
const square = number => number * number;  // arrow function without parentheses
console.log(square(3));

/* Exercise #1, Function 3
function isEven(number) {
   if (number % 2 === 0) {
       return true;
   } else {
       return false;
   }
}*/
const isEven = number => number % 2 === 0 ? true : false; // arrow function with ternary operator
console.log(isEven(6));
console.log(isEven(9));

/* Exercise #2 Part 1:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your higher-order function
const evenNumbersSquared = numbers => {
// Use filter and/or map
};
console.log(evenNumbersSquared(numbers));*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersSquared = numbers =>{
    return numbers.filter(number => number % 2 === 0) // filter even numbers
                  .map(number => number * number) // square the even numbers 
};
console.log(evenNumbersSquared(numbers));

// Part 2:

const prices = [10.99, 5.49, 12.99, 8.75, 15.20];
// Your higher-order function here
const calculateDiscountedTotal = prices =>{
    // Use reduce
    return prices.reduce((total, price) => total + price * (1 - discount), 0); // reduce to calculate total with discount
}
const discount = 0.2; // 20% discount
const total = calculateDiscountedTotal(prices, discount);
console.log(calculateDiscountedTotal(prices));
console.log(`Total after discount: $${total.toFixed(2)}`);// format to 2 decimal places

//Part 3:
const words = ["apple", "banana", "cherry", "date", "elderberry"];
// Your higher-order function here
const findWordWithA = words => {
// Use find
    return words.find(word => word.includes("a")); // find the first word that contains "a"
};
console.log(findWordWithA(words));

//Exercise #3:
const sumOfArray = (arrayOfNumbers) => {
    //Your code here
if (arrayOfNumbers.length ==1){
    return arrayOfNumbers[0]; // base case: if the array has only one element, return that element
}
const numbers1 = arrayOfNumbers.pop(); // remove the last element from the array and store it in a variable
console.log(arrayOfNumbers); // log the array after removing the last element
console.log(numbers1); // log the last element that was removed
return numbers1 + sumOfArray(arrayOfNumbers); // recursive call: add the last element to the sum of the remaining elements
 }
console.log(sumOfArray([1, 2, 3, 4, 5, 6])); 