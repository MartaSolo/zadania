// ## Zadanie 1
// --------------------------
// Stwórz tablicę z 6 losowymi zwierzakami.
// Napisz funkcję `showArray(arr)`, która wypisze kolejne elementy przekazanej tablicy. Zrób to na trzy sposoby za pomocą pętli `for`, `for of` oraz metody `forEach`.
// Dodatkowo wypisz długość każdego słowa a na końcu sumę wszystkich liter występujących w tablicy.

// const arr = ["dog", "cat", "bee", "bat"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let el of arr) {
//     console.log(el);
//     console.log(el.length);
// }

// arr.forEach(function (el) {
//   console.log(el);
// });

// // suma liter w całej array
// const lettersNumber = arr.join("").length;
// console.log(lettersNumber);

// ## Zadanie 2
// --------------------------
// Napisz funkcję `checkPalindrom(txt)`, która zwróci prawdę/fałsz w zależności od tego, czy przekazane słowo jest palindromem.
// Przykładem palindromu jest słowo `kajak`.

// function checkPalindrom(txt) {
//   let txtArr = txt.split("");
//   console.log(txtArr); // ['p', 'i', 'e', 's']
//   let txtArrReversed = txtArr.reverse();
//   console.log(txtArrReversed); // ['s', 'e', 'i', 'p']
//   let txtReversed = txtArrReversed.join("");
//   console.log(txtReversed); // seip
//   if (txt === txtReversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkPalindrom("pies"));
// console.log(checkPalindrom("kajak"));

// ## Zadanie 3
// Mamy przykładową tablicę imion:

// Stwórz funkcję `unifyNames(names)`, do której przekażesz powyższą tablicę. Funkcja powinna zwrócić nową tablicę z imionami pisanymi małymi literami. Dla utrudnienia możesz zwrócić nową tablicę z imionami pisanymi z dużej litery.

// Wykorzystaj powyższą funkcję aby uzyskać nową tablicę.
// Stwórz kolejną funkcję `countDifferentNames(names)`, do której przekażesz nowo uzyskaną tablicę. Funkcja powinna zwrócić liczby występowania danego imienia.
// Idealnym rozwiązaniem będzie, gdy funkcja zwróci te informacje pod postacią obiektu.

// const names = [
//   "Marcin",
//   "Monika",
//   "Piotr",
//   "Beata",
//   "ania",
//   "marcin",
//   "piotr",
//   "ANIA",
//   "MONIKA",
// ];

// function unifyNames(names) {
//   let namesLc = names.map(function (el) {
//     return el.toLowerCase(); // ['marcin', 'ania', 'monika', 'piotr', 'beata', 'ania', 'marcin', 'piotr', 'piotr', 'ania', 'monika']
//   });
//   let namesC = namesLc.map(function (el) {
//     return el.substr(0, 1).toUpperCase() + el.substr(1);
//   });
//   return namesC;
// }

// console.log(unifyNames(names)); //['Marcin', 'Monika', 'Piotr', 'Beata', 'Ania', 'Marcin', 'Piotr', 'Ania', 'Monika']

// const namesC = [
//   "Marcin",
//   "Monika",
//   "Piotr",
//   "Beata",
//   "Ania",
//   "Marcin",
//   "Piotr",
//   "Ania",
//   "Monika",
// ];

// function countDifferentNames(arr) {
//   const namesStat = {};
//   arr.forEach(function (element) {
//     namesStat[element] = ++namesStat[element] || 1;
//   });
//   return namesStat;
// }

// console.log(countDifferentNames(namesC));
// {Marcin: 2, Monika: 2, Piotr: 2, Beata: 1, Ania: 2}

// ## Zadanie 4
// --------------------------
// Stwórz funkcję `random(max)`, która będzie zwracać losową liczbę z zakresu `0 - max`. Wykorzystaj tą funkcję do wygenerowania 20-elementowej tablicy. Posortuj tą tablicę,  a następnie wypisz sumę oraz średnią wszystkich liczb z tej tablicy.

// funkcja generująca random numbers
// function random(max) {
//   return Math.floor(Math.random() * (max - 0 + 0) + 0);
// }
// console.log(random(20));

// // utworzenie array z ranom numbers - lae zawiesza chrome

// function randomArr(length, max) {
//   let arrayNum = [];
//   arrayNum.length = length;
//   for (let i = 1; i <= arrayNum.length; i++) {
//     arrayNum.push(Math.floor(Math.random() * max));
//   }
//   return arrayNum;
// }
// randomArr(20, 20);
// console.log(randomArr(20, 20));

// // sortowanie;
// const sortedArray = randomArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(sortedArray);

// ## Zadanie 5
// Mamy tablicę:
// Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy.
// Następnie wypisz w konsoli, ile liter mają wszystkie elementy razem.

// const tab = ["xloror", "klorsum", "alorsumdol", "blor", "clmipsu", "glmip"];
// console.log(tab);

// tab.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(tab);

// console.log(tab.join("").length);

// ## Zadanie 6
// Mamy tablicę.
// Sprawdź, czy w tablicy znajdują się pełnoletni użytkownicy.
// Jeżeli ich nie ma, wypisz w konsoli tekst `same małolaty`. Jeżeli jednak tacy są, stwórz nową tablicę zawierającą tylko pełnoletnie osoby, posortuj ją, a następnie wypisz w konsoli.

// const tabUsers = [
//   { name: "Marcin", age: 14 },
//   { name: "Piotr", age: 18 },
//   { name: "Weronika", age: 20 },
//   { name: "Ania", age: 19 },
//   { name: "Agnieszka", age: 13 },
//   { name: "Magda", age: 30 },
// ];

// function findAdult(array) {
//   const adultUsers = [];
//   let txt = "";
//   array.forEach(function (el, arr) {
//     if (el.age >= 18) {
//       return adultUsers.push(el);
//     }
//   });
//   if (adultUsers.length > 0) {
//     adultUsers.sort(function (a, b) {
//       return a.age - b.age;
//     });
//     return adultUsers;
//   } else {
//     txt = "same małopalty";
//     return txt;
//   }
// }
// console.log(findAdult(tabUsers));

// ## Zadanie 7
// Napisz funkcję `generateArray()`, która za pomocą pętli oraz funkcji `String.fromCharCode()` stworzy i zwróci tablicę składającą się z kolejnych dużych liter. Litera A to kod 65, natomiast Z to 90.
// Napisz funkcję `splitArray(tab, nr)`, do której przekażesz powyższą tablicę oraz liczbę `nr`. Funkcja powinna zwrócić tablicę tablic, gdzie każda podtablica będzie składać się z `nr` kolejnych liter. Możesz tutaj wykorzystać metodę `slice()` dostępną dla tablic.

// input: splitArray(tab, 6)
// wynik:
// [
//     ["A", "B", "C", "D", "E", "F"],
//     ["G", "H", "I", "J", "K", "L"],
//     ["M", "N", "O", "P", "Q", "R"],
//     ["S", "T", "U", "V", "W", "X"],
//     ["Y", "Z"]
// ]
// ```

// function generateArray() {
//   const arrNum = [];
//   const arrStr = [];
//   for (i = 65; i <= 90; i++) {
//     arrNum.push(i);
//   }
//   console.log(arrNum);
//   arrNum.forEach(function (el, arr) {
//     arrStr.push(String.fromCharCode(el));
//   });
//   return arrStr;
// }
// console.log(generateArray());
// // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// const arrStr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// function splitArray(tab, nr) {
//   const arr2D = [];
//   console.log(arr2D);    // empty, cuz tab.slice will append sliced data from 
//   for (i = 0; i <= tab.length; i+nr) {
//     arr2D.push(tab.slice(i, i+=nr));
//   }
//   return arr2D;
// }

// console.log(splitArray(arrStr, 6));

// ## Zadanie 8
// Jako poszukiwacz przygód, doszedłeś do tajemniczej komnaty, na ścianie której znajduje się tajemniczy zapis:
// const arr = [
// 	[ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
// 	[ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
// 	[  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
// 	[ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
// 	[  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
// 	[ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
// 	[ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
// 	[ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
// ]
// W starych notatkach znajdujesz tylko krótki ciąg, który ponoć wskazuje kierunek poruszania się po powyższym zapisie.
// const str = "rrrdddllddrrruuuurrddrruurddddlld";
// Twoim zadaniem jest zdekodować ukrytą informację. Dekodowanie rozpoczynasz w lewym górnym rogu, a następnie powinieneś się poruszać zgodnie z literami, gdzie `r` oznacza prawo, `d` dół, `l` lewo, a `u` górę.
// Po pobraniu kodów z odpowiednich miejsc zamień je na litery za pomocą `String.fromCharCode(x)`.
// Wynikiem powinien być wypisane w konsoli hasło.
