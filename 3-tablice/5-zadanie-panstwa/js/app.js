// # Zadania - tablice
// W pliku `data/data.js` znajduje się tablica z państwami.
// Stosując poznane metody tablicowe zrealizuj poniższe zadania:

// ## Zadanie 1
// Wypisz wszystkie nazwy państw, a następnie ile jest razem ludności we wszystkich państwach

// let worldPopulation = 0;

// countries.forEach(function (el) {
//   console.log(el.name);
//   worldPopulation += el.population;
//   //   console.log(worldPopulation);
// });

// console.log(worldPopulation);

// let percentOfPop = 0;
// countries.forEach(function (el) {
//   percentOfPop = (worldPopulation / el.population) * 100;
//   console.log(percentOfPop);
// });

// console.log(object);

// ## Zadanie 2
// Wypisz średnią ludność w państwach

// average population by country

// let worldPop = 0;
// let avPop = 0;
// countries.forEach(function (el) {
//   worldPop += el.population;
//   avPop = worldPop / countries.length;
// });

// console.log(avPop);
// console.log(worldPop);

// ## Zadanie 3
// Wypisz ile jest państw, które mają dodatni wzrost

// let counter = 0;
// countries.forEach(function (el) {
//   if (el.grow > 0) {
//     counter++;
//   }
// });
// console.log(counter);

// ## Zadanie 4
// Wypisz ile jest państw, które mają ujemny wzrost

// let counter = 0;
// countries.forEach(function (el) {
//   if (el.grow < 0) {
//     counter++;
//   }
// });
// console.log(counter);

// ## Zadanie 5
// Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)

// let worldAreaSum = 0;
// countries.forEach(function (el) {
//   worldAreaSum += el.world_area_in_percent;
// });
// console.log(worldAreaSum);

// ## Zadanie 6
// Napisz ile wynosi średnia dzietności na świecie (fertility_rate) (uwaga - niektóre kraje nie mają danych - wtedy jest null)

// let sumFertilityrate = 0;
// let numFertilityrate = 0;

// countries.forEach(function (el) {
//   if (el.fertility_rate !== null) {
//     sumFertilityrate += el.fertility_rate;
//     numFertilityrate++;
//   }
// });
// let avFertilityRate = sumFertilityrate / numFertilityrate;
// console.log(avFertilityRate);

// ## Zadanie 7
// Napisz ile wynosi średnia wieku na świecie

// let worldAgeSum = 0;

// countries.forEach(function (el) {
//   worldAgeSum += el.medium_age;
//   console.log(worldAgeSum);
// });

// let worldAgeAv = worldAgeSum / countries.length;
// console.log(worldAgeAv);

// ## Zadanie 8
// Wypisz wszystkie dane na temat Polski

// const country = countries.filter(function (el) {
//   return el.name === "Poland";
// });
// console.log(country);

// ## Zadanie 9
// Sprawdź czy średnia wieku w Polsce jest większa od średniej na Świecie.

let medAgeSum = 0;

countries.forEach(function (el) {
  medAgeSum += el.medium_age;
});

console.log(medAgeSum);
let medAgeAv = medAgeSum / countries.length;
console.log(medAgeAv);

// medium age in Polnad
let medAgePoland = 0;
countries.filter(function (el) {
  if (el.name === "Poland") {
    medAgePoland = el.medium_age;
  }
});
console.log(medAgePoland);

if (medAgeAv > medAgePoland) {
  console.log("Srednia wieku na świecie jest większa niż w Polsce");
} else {
  console.log("Srednia wieku w Polsce jest większa niż na świecie");
}
