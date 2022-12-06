// Variables
let country = "United States";
let continent = "North America";
let population = "331900000";

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "English";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

const countryHalf = population / 2;
console.log(countryHalf);
population++;
console.log(population);

populationFinland = 6000000;
console.log(population > populationFinland);
populationAverage = 33000000;
console.log(population < populationAverage);

description = `${country} is in ${continent} and its ${population} people speak mostly ${language}`;

console.log(description);

if (population > 33000000) {
  console.log(`${country} population is above average.`);
} else {
  console.log(
    `${country} population is ${33000000 - population} below average.`
  );
}
