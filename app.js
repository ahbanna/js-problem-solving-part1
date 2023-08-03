// Problem: 1
// Reverse a String: Write a function that takes a string as input and returns its reverse.
function reverseString(text) {
  return text.split("").reverse().join("");
}
let text = "Tutul";
let result = reverseString(text);
console.log(result);

// Problem: 2
// Check for Palindrome: Write a function that checks if a given string is a palindrome (reads the same backward as forward).
function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
}
let string = "madam";
let resultPalindrome = isPalindrome(string);
console.log(resultPalindrome);

// Problem: 3
// Find the Largest Number:Write a function that takes an array of numbers as input and returns the largest number from the array.
function findLargestNumber(arr) {
  return Math.max(...arr);
}
const arr = [45, 67, 12, 98, 34, 72];
const largestNumber = findLargestNumber(arr);
console.log("The largest number is:", largestNumber);
