'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

// Destructuring an array = break an array into smaller elements
const arr = [2, 3, 4];

const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr); // original array is not affected

const [first, second] = restaurant.categories;
console.log(first, second);

const [first2, , third] = restaurant.categories;
console.log(first2, third);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swapping two values in an array
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

// Nested destructuring
const [x, , [y, z]] = nested;
console.log(x, y, z);

// Default values = useful when we get data from an API
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructuring Objects = useful for getting API data
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// change the names of item
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let d = 111;
let e = 999;

const obj = { d: 23, e: 7, f: 14 };
({ d, e } = obj);
console.log(d, e); // 23 7

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

// The spread operator used on RIGHT of the assignment operator

const spreadArr = [7, 8, 9];

const newArr = [1, 2, ...spreadArr];
console.log(newArr); // [1,2,7,8,9]

// Also useful when you need the elements individually outside of the array
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays or more together
const myMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(myMenu);

// Iterables are arrays, strings, maps, and sets, but NOT objects
const str = 'Kevin';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str); // K e v i n

const ingredients = [
  prompt('Let us make pasta! Ingredient 1? '),
  prompt('Ingredient 2? '),
  prompt('Ingredient 3? '),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Rest pattern used on LEFT of the assignment operator

const [one, two, ...others] = [1, 2, 3, 4, 5];
console.log(one, two, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
