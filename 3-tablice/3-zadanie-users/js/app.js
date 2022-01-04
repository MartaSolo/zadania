// ## Zadanie 1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.
// Claire Lucas -> clairelucas@memora.com

// users.forEach(function (el, arr) {
//   console.log(el.name + " -> " + el.email);
// });

// ## Zadanie 2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi

// users.forEach(function (el, arr) {
//   if (el.age >= 18) {
//     console.log(el.name + " is " + el.age);
//   }
// });

// ## Zadanie 3
// Wypisz tablicę z wszystkimi kobietami.

// const filteredUsers = users.filter(function (el, arr) {
//   return (el.gender = "female");
//   p;
// });
// console.log(filteredUsers);

// const sortedFilteredUsers = filteredUsers.sort(function (a, b) {
//   return a.age - b.age;
// });

// ## Zadanie 4
// Wypisz tablicę użytkowników którzy mają tag "dolor"

// const filteredArray = users.filter(function (el, arr) {
//   return el.tags.includes("dolor");
// });
// console.log(filteredArray);

// ## Zadanie 5
// Wypisz true/false w zależności od tego, czy wszyscy użytkownicy są pełnoletni
// const filteredArray = users.every(function (el, arr) {
//   return el.age >= 18;
// });
// console.log(filteredArray);

// ## Zadanie 6
// Wypisz true/false w zależności od tego, czy chociaż jeden z użytkowników jest pełnoletni

// const filteredArray = users.some(function (el, arr) {
//   return el.age >= 18;
// });
// console.log(filteredArray);

// ## Zadanie 7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników, które będą pisane dużymi literami
// const filteredArray = [];

// users.forEach(function (el, arr) {
//   filteredArray.push(el.name.split(" ")[0].toUpperCase());
//   return filteredArray;
// });
// console.log(filteredArray);

// ## Zadanie 8
// --------------------------
// Wypisz liczbę kobiet i liczbę mężczyzn
// Wypisz tekst, która grupa jest liczniejsza (np. `"kobiety wygrywają"`)

let femaleNumber = 0;
let menNumber = 0;

users.forEach(function (el, arr) {
  if (el.gender === "female") {
    femaleNumber++;
  } else {
    menNumber++;
  }
});

if (femaleNumber > menNumber) {
  console.log("kobiety wygrywają");
} else {
  console.log("mezczyzni wygrywają");
}
