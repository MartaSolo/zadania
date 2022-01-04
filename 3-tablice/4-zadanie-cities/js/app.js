// ## Zadanie 1
// Wypisz ile miast jest w Polsce

// console.log(cities.length);

// ## Zadanie 2
// Wypisz ile jest ludzi w tych miastach

// let population = 0;

// cities.forEach(function (el, arr) {
//   return (population += el.people);
// });

// console.log(population);

// ## Zadanie 3
// Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi

// const bigCities = cities.filter(function (el) {
//   return el.people > 10000;
// });

// console.log(bigCities[0].name);

// ## Zadanie 4
// Wypisz miasta, w których ludzi jest ponad średnią

// let population = 0;
// let averagePopulation = 0;

// const biggerCities = cities.filter(function (el) {
//   population += el.people;
//   averagePopulation = Math.floor(population / cities.length);
//   return el.people < averagePopulation;
// });
// console.log(population);
// console.log(cities.length);
// console.log(averagePopulation);
// console.log(biggerCities);

// ## Zadanie 5
// Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi

// const bigCities = cities.filter(function (el) {
//   return el.people > 10000;
// });

// bigCities.forEach(function (el) {
//   console.log(el.name);
// });

// ## Zadanie 6
// Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych

let cityMore10k = 0;
let cityLess10k = 0;

cities.forEach(function (el) {
  if (el.people > 10) {
    cityMore10k++;
  } else {
    cityLess10k++;
  }
});

if (cityMore10k > cityLess10k) {
  console.log("Jest więcej miast z liczba mieszkańców ponad 10000");
} else {
  console.log("Jest więcej miast z liczba mieszkańców poniżej 10000");
}
