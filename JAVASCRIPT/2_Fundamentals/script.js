// * strict mode = makes it easier to write secure javaScript code
// forbids us from doing specific things
// create visible errors in console for us in certain situations
"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // strict mode finds this mispelling
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = "Audio"; // strict mode reserved word error

// * Functions
// A function is a piece of code we can reuse over and over again in our code

// Declaring a function
function logger() {
  console.log("My name is Kevin");
}

// Invoking, running, or calling the function
logger();
logger();

// Defining parameters in a function that get defined when the function is called
// return allows us to return any value from the function. The value can then be used
// anywhere in our code
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);

// after running the function, juice was returned, so we can now use it.
// We first have to store it in a variable

const appleJuice = fruitProcessor(6, 0);
console.log(appleJuice);

// We can also directory log that value to the console
console.log(fruitProcessor(7, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// * Function declaration vs expressions

// function declaration
function calcAge1(birthYear) {
  // const age = 2022 - birthYear;
  return 2022 - birthYear;
}

const age1 = calcAge1(1967);
console.log(age1);

// function expression also called an anonymous function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1967);
console.log(age2);

// One difference is that we can call a function declaration before they are defined

// * Arrow functions
// shorter and faster to write

const calcAge3 = (birthYear) => 2037 - birthYear; // value is automatically returned
const age3 = calcAge3(1967);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 70 - age;
  return `${firstName} retires in ${retirement} years`;
  // need the return if more than one line in an arrow function
};

console.log(yearsUntilRetirement(1967, "Kevin"));

// * Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor2(2, 3));

// * Coding challenge #1

const calcAverage = (num1, num2, num3) => (num1, num2, num3) / 3;

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`It's a tie! (${avgKoalas} vs. ${avgDolphins})`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// * Arrays - Two most important Data Structures are Arrays and Objects

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Another way using the Array function
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// getting data from the array and the length property
console.log(friends[0]); // Michael
console.log(friends[2]); // Peter
console.log(friends.length); // 3

// Getting the last element of an array
console.log(friends[friends.length - 1]);

// replacing an item in an array, also called mutating an array
friends[2] = "Jay";
console.log(friends);

const kevin = ["Kevin", "Stevens", 2022 - 1967, "developer", friends];
console.log(kevin);

// Exercise
const yearsArray = [1990, 1967, 2002, 1995, 1999];
const ages1 = calcAge1(years[0]);
console.log(ages1);

// * Array Methods
// push method = adds elements to the end of an array

const newLength = friends.push("Cal"); // returns the new length of the array
console.log(friends);
console.log(newLength);

// unshift method = adds elements to the beginning of an array
friends.unshift("John"); // returns the new length of the array
console.log(friends);

// pop method = removes the last element from an array
friends.pop(); // returns the removed element
console.log(friends); // Cal is now gone

// shift method = removes the first element from an array
friends.shift();
console.log(friends); // John is now gone

// indexOf method = which position and element is in the array
console.log(friends.indexOf("Steven"));

// includes method = returns true if element is in array and false if not
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// Exercise
const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip2 = (bill) =>
//   bill >= 50 && bil <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 535, 44];
const tips = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])];

console.log(bills, tips);

// * Introduction to Objects
const kevinObject = {
  firstName: "Kevin",
  lastName: "Stevens",
  birthYear: 1967,
  job: "Developer",
  friends: ["Michael", "Steven", "Peter"],
  ridesMotorcycle: true,

  // calcAge1: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  calcAge1: function () {
    console.log(kevinObject); // same
    console.log(this); // same
    return 2022 - this.birthYear;
  },
};

console.log(kevinObject);

// getting data from an object

// dot notation
console.log(kevinObject.lastName);

// bracket notation
console.log(kevinObject["lastName"]); // can use expressions using bracket notation

const nameKey = "Name";
console.log(kevinObject["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Kevin? Choose between firstName, lastName, age, job, and friends"
);
console.log(kevinObject[interestedIn]);

// adding to an object
kevinObject.location = "Tennessee";
console.log(kevinObject);

console.log(
  `${kevinObject.firstName} has ${kevinObject.friends.length} friends, and his best friend is called ${kevinObject.friends[0]}`
);

// * Object methods
console.log(kevinObject.calcAge1());

// console.log(kevinObject["calcAge1"](1967));

// * for loop - keeps running while condition is true

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// One function of a for loop is to loop through an array
const kevinArray = [
  "Kevin",
  "Stevens",
  2022 - 1967,
  "developer",
  ["Michael", "Peter", "Stevens"],
];

const types = [];

for (let i = 0; i < kevinArray.length; i++) {
  // reading from kevinArray
  console.log(kevinArray[i], typeof kevinArray[i]);

  // filling an array
  // types[i] = typeof kevinArray[i];
  types.push(typeof kevinArray[i]);
}

console.log(types);

// continue (exit current iteration and continue to next one) and break (terminate entire loop)
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < kevinArray.length; i++) {
  if (typeof kevinArray[i] !== "string") continue; // print strings, skip others
  console.log(kevinArray[i], typeof kevinArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < kevinArray.length; i++) {
  if (typeof kevinArray[i] === "number") break; // exit after number is found
  console.log(kevinArray[i], typeof kevinArray[i]);
}

// * Looping backwards
for (let i = kevinArray.length - 1; i >= 0; i--) {
  console.log(kevinArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------------Start exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`----------Lifting weights repetition ${rep}`);
  }
}

// * while loop
let rep = 1;
while (rep <= 10) {
  console.log(`----------Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
