// # Zadania - obiekty
// ==========================

// ## Zadanie 1
// --------------------------
// Stwórz 2 obiekty: `rectangle` i `circle`.
// Obiekt rectangle powinien mieć właściwości `height`, `width`, natomiast circle właściwość `radius`.
// Oba obiekty powinny mieć metodę `showArea()`, która zwróci pole danej figury.

// Wypisz oba obiekty w konsoli.
// Wypisz w konsoli teksty podstawiając odpowiednie dane w miejsce kropek:

// ```
// Kwadrat ma szerokość ... i wysokość ...
// Jego pole to ...

// Koło ma promień ...
// Jego pole to ...
// ```

// const rectangle = {
//   height: 10,
//   width: 20,
//   showArea() {
//     return this.height * this.width;
//   },
// };

// console.log(rectangle);
// console.log(rectangle.showArea());
// console.log(
//   "Kwadrat na szerokość " +
//     rectangle.width +
//     " i wyskokość " +
//     rectangle.height +
//     ". Jego pole to " +
//     rectangle.showArea() +
//     "."
// );

// const circle = {
//   radius: 20,
//   showArea() {
//     return Math.PI * this.radius;
//   },
// };

// console.log(circle);
// console.log(circle.showArea());
// console.log(
//   "Koło ma primień " +
//     circle.radius +
//     ". Jego pole to " +
//     circle.showArea() +
//     "."
// );

// ## Zadanie 2
// Stwórz obiekt **currentUser**. Obiekt niech ma właściwości:
// `name`, `surname`, `email`, `www`, `userType`, `isActive`.
// oraz metodę `show()`, która wypisze wszystkie te właściwości w konsoli.
// Dodatkowo stwórz metodę `setActive(active)`, która przestawi właściwość `isActive` na przekazaną wartość, która
// może być true/false.

// const currentUser = {
//   name: "Marta",
//   surname: "Solo",
//   email: "martasolo@o2.pl",
//   www: "in progress",
//   userType: "advanced user",
//   isActive: true,
//   show() {
//     console.log(`
//     Name: ${this.name}
//     Surname: ${this.surname}
//     Email: ${this.email}
//     www: ${this.www}
//     User type: ${this.userType}
//     `);
//   },
//   setActive(boolean) {
//     return (this.isActive = boolean);
//   },
// };

// console.log(currentUser.show());
// console.log(currentUser.setActive(false));

// console.log(currentUser);

// ## Zadanie 3
// Stwórz obiekt book, który będzie miał właściwości:
// `title`, `author`, `pageCount`, `publisher`.
// oraz metodę: `showDetails()`, która zrobi pętlę po tym obiekcie wypisując wszystkie
// jego klucze oraz ich wartości. Metoda ta nie powinna wypisywać tylko funkcji `showDetails()`.
// Wypisywanie właściwości wykonaj za pomocą pętli `for in`, oraz pętli po kolekcjach `Object.keys()`, `Object.values()`, `Object.entries()`.

// // for in loop
// const book = {
//   title: "paradise",
//   author: "Blake",
//   pageCount: 154,
//   publisher: "Anaconda",
//   showDetails: function () {
//     for (let key in this) {
//       if (this.hasOwnProperty(key)) {
//         if (typeof this[key] !== "function") {
//           console.log(`${key}: ${this[key]}`);
//         }
//       }
//     }
//   },
// };

// console.log(book.showDetails());

// // Object.keys()

// const book = {
//   title: "paradise",
//   author: "Blake",
//   pageCount: 154,
//   publisher: "Anaconda",
//   showDetails: function () {
//     Object.keys(this).forEach((key) => {
//       if (typeof this[key] !== "function") {
//         console.log(`${key}: ${this[key]}`);
//       }
//     });
//   },
// };
// console.log(book.showDetails());

// // Object.entires()

// const book = {
//   title: "paradise",
//   author: "Blake",
//   pageCount: 154,
//   publisher: "Anaconda",
//   showDetails: function () {
//     for (let [key, val] of Object.entries(this)) {
//       if (typeof this[key] !== "function") {
//         console.log(key + "-" + val);
//       }
//     }
//   },
// };
// console.log(book.showDetails());

// ## Zadanie 4
// Stwórz prosty obiekt **spaceShip**, który będzie miał:
// #### Właściwości:
// - **name** ustawioną na Enterprise
// - **currentLocation** ustawioną na Earth
// - **flyDistance** ustawione na 0
// #### Metody:
// - **flyTo(place, distance)**, która ustawi obiektowi właściwość `currentLocation` na odpowiednie miejsce podane w parametrze `place` oraz doliczy przebyty dystans do `flyDistance`.
// - **showInfo()**, która wypisze w konsoli tekst:
//     ```
//     Informacje o statku:
//     ----
//     Statek ....
//     doleciał do miejsca .....
//     Statek przeleciał już całkowity dystans ....
//     ```
// - **meetClingon()**, która wykona 100 losowań 0-1. Jeżeli minimum połowa będzie pozytywna (większa niż połowa), wtedy powinna wypisać w konsoli:
//     ```Statek .... będący w okolicy .... zwycięsko wyszedł ze spotkania z Klingonami```
//     jeżeli jednak mniej niż połowa będzie pozytywna, powinien pojawić się żółty tekst w konsoli (console.alert)
//     ```Statek .... będący w okolicy .... został pokonany przez Klingonów```

// const spaceShip = {
//   name: "Enterprise",
//   currentLocation: "Earth",
//   flyDistance: 0,
//   flyTo(place, distance) {
//     this.currentLocation = place;
//     this.flyDistance += distance;
//   },
//   showInfo() {
//     console.log(
//       `Informacje o statku:
// Statek ${this.name}
// Doleciał do miejsca ${this.currentLocation}
// Statek przeleciał już całkowity dystans ${this.flyDistance}`
//     );
//   },
//   meetClingon() {
//     let arrNumber = [];
//     let arrNumber05 = [];
//     for (let i = 0; i < 100; i++) {
//       arrNumber.push(Math.random());
//     }
//     arrNumber05 = arrNumber.filter((el) => {
//       return el > 0.5;
//     });
//     if (arrNumber05.length > 50) {
//       return console.log(
//         `Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`
//       );
//     } else {
//       return console.log(
//         `Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`
//       );
//     }
//   },
// };

// spaceShip.flyTo("Island of Moon", 540);
// console.log(spaceShip.currentLocation, spaceShip.flyDistance);
// // Island of Moon 540
// spaceShip.showInfo();
// // Informacje o statku:
// // Statek Enterprise
// // Doleciał do miejsca Island of Moon
// // Statek przeleciał już całkowity dystans 540
// spaceShip.meetClingon();
// // Statek Enterprise będący w okolicy Island of Moon został pokonany przez Klingonów
// console.log(spaceShip);

// ## Zadanie 5
// --------------------------
// Stwórz obiekt **book**, który będzie miał:

// #### Właściwości:
// - **users**
//     która będzie tablicą użytkowników (na początku pusta)

// #### Metody:
// - **addUser(name, age, phone)**

//     która doda to tablicy `users` nowy obiekt, który będzie miał klucze:
//     name, age, phone z przekazanymi do tej funkcji danymi

// - **showUsers()**

//     która po odpaleniu wypisze w konsoli tekst:
//     `Wszyscy użytkownicy w książce` a następnie w pętli wypisze wszystkich użytkowników

// - **findByName(name)**

//     która wypisze w konsoli pierwszego użytkownika, który ma szukane imię
//     lub `false` jeżeli nie znajdzie.

// - **findByPhone(phone)**

//     która wypisze w konsoli pierwszego użytkownika, który ma szukany telefon
//     lub `false` jeżeli nie znajdzie

// - **getCount()**

//     która wypisze ile jest użytkowników w tabeli

// ## Zadanie 6
// --------------------------
// Stwórz obiekt o nazwie **tableGenerator**.
// Obiekt ten powinien mieć tylko metody:

// 1. **randomNumber(min, max)**

//     zwraca losową liczbę z przedziału `min`-`max`

// 2. **generateIncTable(nr)**

//     zwraca nową tablicę z liczbami od 0 do `nr`

// 3. **generateRandomTable(lng, min, max)**

//     zwraca nową tablice o długości `lng` z losowymi liczbami z przedziału `min`-`max`

// 4. **generateTableFromText(str)**

//     generuje nową tablicę ze słowami z tekstu `str`
//     Jeżeli przekazany tekst nie jest tekstem, wtedy powinna być zwrócona pusta tablica
//     Wykorzystaj odpowiednią metodę dla String

// 5. **getMaxFromTable(arr)**

//     zwraca największą liczbę z tablicy `arr`

// 6. **getMinFromTable(arr)**

//     zwraca najmniejszą liczbę z tablicy `arr`

// 7. **delete(arr, index)**
//     usuwa z tablicy `arr` element o indexie `index`

// ## Zadanie 7
// --------------------------
// Stwórz obiekt o nazwie **text**. Obiekt ten powinien mieć metody:

// 1. **check(txt, word)**

//     która zwraca `true/false` jeżeli w tekście `txt` znajduje się szukane słowo `word`

//     ```
//     check("ala ma kota", "kota")
//     ---> true
//     ```

// 2. **getCount(txt)**

//     Zwraca liczbę liter w tekście `txt`. Uwaga znaki interpunkcyjne też traktujmy jako litery

//     ```
//     getCount("ala ma kota")
//     ---> 11
//     ```

// 3. **getWordsCount(txt)**

//     zwraca liczbę słów w przekazanym tekście

//     ```
//     getWordsCount("Ala ma kota")
//     ---> 3
//     ```

// 4. **setCapitalize(txt)**

//     zwraca nowy tekst tak zamieniony, że każde słowo zaczyna się z dużej litery

//     ```
//     setCapitalize("ala ma kota")
//     ---> "Ala Ma Kota"
//     ```

// 5. **setMix(txt)**

//     zwraca nowy tekst z naprzemiennie dużymi/małymi literami. Spację i znaki interpunkcyjne traktujemy jako litery.

//     ```
//     setMix("ala ma kota")
//     ---> "aLa mA KoTa"
//     ```

// 6. **generateRandom(lng)**

//     Generuje tekst o długości `lng`, który składa się z losowych liter

//     ```
//     generateRandom(10)
//     ---> "dkjiuhtjox"
//     ```
