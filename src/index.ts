// import controller
import { fizzBuzz } from './controller/FizzBuzz';
import { isPalindrome } from './controller/Palindrome';
import { fizzBuzzBazz } from './controller/FizzBuzzBazz';

const resultFizzBuzz = fizzBuzz.generate(1, 100);
const resultIsPalindrome = isPalindrome.generate('makam')

// Show fizzbuzz result in log
console.log(`FizzBuzz: ${resultFizzBuzz}`, '\n');
console.log(`Palindrome: ${resultIsPalindrome}`, '\n');

// ** Add a new set of rule from FizzBuzz class, uncomment below code
// const resultFizzBuzzBazz = fizzBuzzBazz.generate(200, 300);
// console.log(`FizzBuzzBazz: ${resultFizzBuzzBazz}`, '\n');