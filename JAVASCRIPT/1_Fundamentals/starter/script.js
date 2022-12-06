// JavaScript is a high level, object-oriented, multi-paradigm programming language.
// Programming language is a tool that allows us to write code that instructs the computer to do something.
// High level means we do not need to worry about complex areas such as managing computer memory.
// object oriented means mostly based on objects that stores all kinds of data
// multi-paradigm means it is flexible and versatile

//  HTML, CSS, and JavaScript are used together to create beautiful and active web pages
// HTML is responsible for the content
// CSS is used for the presentation of that content
// JavaScript is the programming language if the internet and allows developers to add dynamic and interactive effects

let js = "amazing";
console.log(40 + 8 + 23 - 10);

// ** Values: pieces of data. The smallest unit of information we have in JavaScript.

console.log("Kevin");
console.log(23);

// Declaring a variable by assigning a value to a variable
let firstName = "Kevin";
console.log(firstName);

// naming variables we use camelCase
// Rules: variables cannot start with a number such as 3
//      variables can only contain 0-9, a-z, A-Z, _, or $
//      variables cannot use a reserved keyword
//      variables should not start with an uppercase letter
//      uppercase letters are used in OOP as we'll see later
//      variables containing all uppercase are used for constants
//      constants are variables we know will never change like PI
//      let PI = 3.1415;
//      variable names should be descriptive like myFirstJob

// ** Data Types
// Value = either an Object or a Primitive Value
// 7 Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol, and BigInt
// Number: Floating point numbers used for decimals and integers
// String: Sequence of characters used for text
// Boolean: true of false used for decisions in code
// Undefined: Value taken by a variable not yet defined (let abc)
// Null: Also means empty
// Symbol (ES2015): Value that is unique and cannot be changed
// BigInt (ES2020): Larger integers that the Number can hold

// Dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// This is a single line comment
/* This is a multi-line comment */

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true); // boolean
console.log(typeof javaScriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof "Kevin"); // string

// dynamic typing in action. Note that changing the value of a variable does not use let
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun); // string

// Undefined variable
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 2022;
console.log(year); // 2022
console.log(typeof year); // number

console.log(typeof null); // object - regarded as a bug

// * let, const, and var
// use let when you want to mutate a variable
let age = 30;
age = 31; // reassigning a value to a variable or mutate the variable

// use const so a variable cannot be changed or mutated
const birthYear = 1967;
// birthYear = 1991; // Give a TypeError
// cannot create empty const variables because they are immutable

// It recommended to always use const and only use let when you are absolutely sure the variable needs to change in the future

// var should be avoided. This is the old way prior to ES6
// works almost the same as let
// let is block scope and var is function scope
var job = "Programmer";
job = "Developer";

// * Operators

// Math operators
const currentYear = 2022;
const ageKevin = currentYear - 1967;
console.log(ageKevin);

console.log(ageKevin * 2, ageKevin / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const lastName = "Stevens";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1;
x--; // x = x - 1;
console.log(x);

// Comparison operators - > < <= >=
console.log(ageKevin > 50); // true
console.log(ageKevin >= 55); // true

console.log(currentYear - 1967 > currentYear - 1991); // true

// * Operator precedence

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Under TABLE

// * Coding challenge 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// * Strings and Template Literals

// const jobKevin = "Developer";

// Type coercion: a number changes type when used in a string
const kevin =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";
console.log(kevin);

// Template Literals (ES6) uses back ticks ``
const kevinNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(kevinNew);

// Multi line strings. Use Template Literal (``)
console.log(`String
multiple
line`);

// * Decisions: if / else

const ageSarah = 15;

if (ageSarah >= 18) {
  console.log("Sarah can start driving license");
} else {
  yearsLeft = 18 - ageSarah;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const sarahBirthYear = 1991;
// Need to define the century variable outside of the code block
// Any variable declared inside a code block is not accessible outside that code block

let century;
if (sarahBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// * Type Conversion and Coercion
// Type Conversion: We manually change the type from one to another
// Type Coercion: JavaScript automatically coverts types behind the scenes

// An example is when someone inputs data, it is entered as a string. We can convert strings to numbers by using the Number function. This will allow us to perform calculations on the users input
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// Can also convert a number to a string
console.log(String(23), 23);

// Now we move on to Type Coercion.
// The + operator converts numbers to strings
// The same happens in template literals
console.log("I am " + 23 + " years old");

// Below JavaScript converts strings to numbers
// - operator triggers opposite coercion (Strings to Numbers)
console.log("23" - "10" - 3); // 10

// Both are converted to Numbers below
// The only way the * operator can work
// The same is true for the / operator
console.log("23" * "2"); // 46

// * Truthy and Falsy values

// Falsy are values that will become false if we convert them into a Boolean
// There are 5 Falsy values
// 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Kevin"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all ");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}

// * Equality operators == (loose equality - does type coercion) vs === (strict equality - no type coercion)
if (age === 18) {
  console.log("You are 18 years old");
}

console.log("== vs ===");
console.log("18" === 18); // false
console.log("18" == 18); // true

// A general rule, use === (strict equality)

const favorite = prompt("What is your favorite number? ");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  // "23" == 23 type coercion
  console.log("Cool!");
} else if (favorite == 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

// * Logical Operators && (AND) || (OR) and ! (not)

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// * Switch statement does a strict comparison

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day.");
}

// * Conditional (Ternary) operator
// Condition ? true : false

const kevinAge = 55;
kevinAge >= 18
  ? console.log("I like to drink cola")
  : console.log("I like to drink water");

const drink = kevinAge >= 18 ? "cola" : "water";
console.log(drink);

console.log(`I like to drink ${drink}`);

// * Coding challenge
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
