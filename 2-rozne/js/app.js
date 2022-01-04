//

//-------------------- Strings ------------------------//
//## Zadanie 1
// --------------------------
// Napisz funkcję `countWord(txt)`, która wymagać będzie tekstu.
// Funkcja powinna zwrócić liczbę słów z ilu składa się przekazany tekst.
// Następnie użyj jej do wypisania tekstu:
// `"Tekst 'tutaj twój przykładowy tekst' składa się z 4 wyrazów"`
// Przykładowy tekst pobierz od użytkownika za pomocą funkcji `prompt()`.
// Jeżeli użytkownik nic nie wpisze, wypisz w konsoli tekst `nie mam co liczyć`.

// ```
// input: "Koty to fajne zwierzaki"
// wynik:
// Tekst "Koty to fajne zwierzaki" składa się z 4 wyrazów"
// ```

// let text1 = window.prompt();

// function countWord(text) {
//   let array;
//   let txt;
//   if (text.length > 0) {
//     array = text.split(" ");
//     return array.length;
//   }
//   if (text.length === 0) {
//     txt = "nie ma co liczyć";
//     return txt;
//   }
// }

// console.log(countWord(text1));

// ## Zadanie 2
// --------------------------
// Za pomocą funkcji `prompt()` pobierz od użytkownika jego imię.
// Napisz funkcję `fixName(name)`, do której przekażesz przekazane imię.
// Funkcja powinna zwrócić poprawione imię, które będzie pisane małymi literami i rozpoczynało się od dużej litery.
// Wykorzystaj tą funkcję do wypisania w konsoli tekstu `"Imię Piotr rozpoczyna się od litery P"`.
// Jeżeli użytkownik nic nie wpisze, w konsoli wpisz tylko tekst `"nic nie wpisano"`.
// ```
// input: "ania"
// wynik:
// Imię Ania rozpoczyna się od litery A
// ```

// let name1 = window.prompt();
// let name2 = window.prompt();

// function fixMe(name) {
//   let newName;
//   if (name.length > 0) {
//     newName = name.substring(0, 1).toUpperCase() + name.substring(1);
//     console.log(
//       "Imię " + newName + " rozpoczyna się od litery " + newName.charAt(0)
//     );
//     return newName;
//   } else {
//     return console.log("nic nie wpisano");
//   }
// }

// fixMe(name1);
// fixMe(name2);

// // ## Zadanie 3
// // --------------------------
// Napisz funkcję `fileInfo(file)`, która będzie przyjmować pełną nazwę pliku (wraz z rozszerzeniem).
// Funkcja powinna zwracać obiekt, z właściwościami `name` oraz `extension`. Pod name podstaw nazwę przekazanego pliku, a pod extension jego rozszerzenie.
// Jeżeli przekazany plik nie będzie w formacie `nazwa.rozszerzenie` (np. nie będzie miał nazwy plik.jpg), wtedy funkcja powinna zwróć false.

// let file1 = "photo.jpg";
// let file2 = "phototiff";

// function fileInfo(file) {
//   let fileObject = {};
//   if (file.includes(".")) {
//     fileObject.name = file.split(".")[0];
//     fileObject.extension = file.split(".")[1];
//     return fileObject;
//   } else {
//     return false;
//   }
// }
// console.log(fileInfo(file1));
// console.log(fileInfo(file2));

//-------------------- Numbers ------------------------//

// ## Zadanie 4
// --------------------------
// Napisz funkcję `generateID()`, która po odpaleniu będzie zwracać losowy ciąg 20 znaków (liczb, cyfr i innych). Dowolna metoda kombinacji.

// function generateId() {
//   let signs =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+{}[]|<>";
//   let id = "";
//   for (let i = 0; i < 20; i++) {
//     let index = Math.floor(Math.random() * signs.length);
//     id += signs[index];
//   }
//   return id;
// }

// generateId();
// console.log(generateId());

// ## Zadanie 5
// --------------------------
// Napisz funkcję `printNumbers(nr)`, która wymagać będzie liczby.
// Funkcja powinna zwrócić tekst, który będzie składał się z kolejnych liczb.
// ```
// input: printNumbers(12)
// wynik: "123456789101112"
// ```

// function printNumbers(nr) {
//   let strNum = "";
//   for (let i = 1; i <= nr; i++) {
//     strNum += i;
//   }
//   return strNum;
// }
// printNumbers(10);
// console.log(printNumbers(10));

// ## Zadanie 6
// --------------------------
// Napisz funkcje, która przyjmuje 2 parametry:
// 1) imię - np: Ala
// 2) miesiąc - np: styczeń

// Funkcja ma zwracać:
// * jeżeli miesiąc to grudzien, styczen, luty: `"Ala jezdzi na sankach"`
// * jeżeli miesiąc to marzec, kwiecien, maj: `"Ala chodzi po kaluzach"`
// * jeżeli miesiąc to czerwiec, lipiec, sierpien: `"Ala sie opala"`
// * jeżeli miesiąc to wrzesień, pazdzietnik, listopad: `"Ala zbiera liscie"`

// Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

// Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiąc małymi lub dużymi literami. Jeżeli miesiąc jest "innym słowem", funkcja niech zwraca `"Ala uczy się JS"`

// function nameMonth (name, month) {
//   let txt ="";
//   switch (month) {
//     case ("grudzień" || "Grudzień" || "styczeń" || "Styczeń" || "luty" || "luty"):
//       txt = name + " jeździ na sankach";
//       break;
//     case ("marzec" || "Marzec" || "kwiecień" || "Kwiecień" || "maj" || "Maj"):
//       txt = name + " chodzi po kałużach";
//       break;
//     case ("czerwiec" || "Czerwiec" || "lipiec" || "Lipiec" || "sierpień" || "Sierpień"):
//       txt = name + " sie opala";
//       break;
//     case ("wrzesień" || "Wrzesień" || "październik" || "Październik" || "listopad" || "Listopad"):
//       txt = name + " zbiera liście";
//       break;
//     default:
//       txt = name + " uczy się JS";

//   }
//   console.log(txt);
//   return txt;
// }

// nameMonth("Marta", "grudzień");
// nameMonth("Marta", "ser");
// console.log(nameMonth("Marta", "grudzień"));

// ## Zadanie 7
// --------------------------
// Stwórz funkcję `generateRandom(min, max)`, która będzie przyjmować dwie wartości - min i max. Funkcja powinna zwrócić losową liczbę z podanego przedziału.
// Do generowania losowej liczby możesz użyć wzoru: `Math.floor(Math.random()*(max-min+1)+min)`.

// Wykorzystaj ją do utworzenia 10 liczb z przedziału `1 - 20`. Jeżeli połowa z nich będzie większa od `10`, wypisz tekst `udało się`, w przeciwnym razie wypisz w konsoli tekst `niestety nie`.

// function generateRandom(min, max) {
//   let arrayNum = [];
//   let arrBig =[];
//   let txt = "";
//   for (let i = 1 ; i <= 10; i++) {
//     arrayNum.push(Math.floor(Math.random()*(max-min+1)+min));
//     console.log(arrayNum);
//   }
//   for (let i = 0; i < arrayNum.length; i++) {
//     if (arrayNum[i] > 10) {
//       arrBig.push(arrayNum[i]);
//       console.log(arrBig);
//     }
//   }
//   if (arrayNum.length > 5) {
//     txt +="udało się";
//   } else {
//     txt += "niestety nie";
//   }
//   console.log(txt);
//   return txt;
// }

// generateRandom(1, 20);
// console.log(generateRandom(1, 20));

// ## Zadanie 8
// --------------------------
// Napisz kolejną funkcję `generateRandomTable(min, max, count)`, która korzystając w powyższej funkcji zwróci nową tablicę o długości `count`, która będzie zawierać losowe liczby. Możesz tutaj posłużyć się funkcją z poprzedniego zadania.

// Wygeneruj nową tablicę o długości 10 z liczbami z zakresu 10-100000. Następnie robiąc pętlę po tej tablicy wypisz te liczby tak, by były pisane w jednej kolumnie - przykładowo:

// ```
// _________10
// ________102
// __________1
// _______1002
// ______92020
// ```

// function generateRandomTable(min, max, count) {
//   let arrayNum = [];
//   for (let i = 1 ; i <= count; i++) {
//   arrayNum.push(Math.floor(Math.random()*(max-min+1)+min));
//   console.log(arrayNum);
//   }
//   // for (let i = 0; i < arrayNum.length; i++) {
//   //   arrayNum[i].padStart(10, '0');
//   //   console.log(arrayNum[i].padStart(2, '0'));
//   // }
//   for (let el of arrayNum) {
//     console.log(el);
//   }
//   return arrayNum;
// }

// generateRandomTable(10, 100000, 10);
// console.log(generateRandomTable(10, 100000, 10));

// Do wyrównania liczb możesz wykorzystać funkcję `padStart()`. Zakładamy, że pojedyncza linia powinna mieć długość maksymalnie 10 znaków.

// ## Zadanie 9
// --------------------------
// Mamy przykładowy tekst:

// ```
// const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
// ```

// Napisz funkcję, która przyjmie 2 atrybuty:
// - tekst
// - znak rozdziału (np. `|`)

// Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

// ```
// input: "Ania|Marcin|Bartek"
// wynik:
// "Ania|Bartek|Marcin"
// ```

// const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

// function names(txt, division) {
//   let arrayNames = txt.split(division);
//   console.log(arrayNames);  // ok
//   arrayNames.sort();
//   console.log(arrayNames); //ok
//   let newStr = arrayNames.join("|");
//   console.log(newStr);
//   return newStr;
// }

// names(str, "|");
// console.log(names(str, "|"));

// ## Zadanie 10
// --------------------------
// Napisz funkcję `printBorderText(txt)`, do której przekażesz przykładowy tekst.
// Funkcja powinna wypisać w konsoli tekst obejmując go ramką (odpowiednie znaki skopiuj z poniższego przykładu):

// ## Zadanie 11
// --------------------------
// Mamy dwie zmienne:
// ```
// const min = 1;
// const max = 1000;
// ```
// Za pomocą `prompt()` pobierz od użytkownika liczbę z przedziału `min-max`. Pamiętaj, że `prompt()` zwraca zawsze tekst, więc skonwertuj go na liczbę.
// Jeżeli użytkownik poda liczbę spoza przedziału lub podana wartość nie będzie liczbą, wypisz w konsoli `podana wartość jest błędna`.

// Wewnątrz pętli while generuj losową liczbę z przedziału `min-max` (możesz wykorzystać funkcję z poprzedniego zadania).
// Wypisz w konsoli ile wykonało się iteracji, aż wylosowana liczba była równa tej, którą podał użytkownik. Pętlę while możesz przerwać warunkiem w jej nawiasach albo słowem `break`.

// const min = 1;
// const max = 1000;

// // let userInput = Number(window.prompt());
// let userInput = window.prompt();
// console.log(userInput);
// let userNumber = Number(userInput);
// console.log(userNumber);

// function numbers(min, max) {
//   // let userNumber = Number(userInput);
//   // console.log(typeof userNumber);
//   let txt = "";
//   if (userNumber === NaN || userNumber < min || userNumber > max ) {
//     txt = "podana wartość jest błędna";
//     return txt;
//   }
//   // } else {
//   // let i = 0;
//   //   while ( i < userInput) {
//   //     let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
//   //     userInput === randomNumber;
//   //     i ++;
//   //     if (userInput === randomNumber) {
//   //       break;
//   //     }
//   //     console.log(randomNumber);
//   //     console.log(i);
//   //   }
//   // }
// }
// numbers(2,100);
// console.log(numbers(2,100));

// ## Zadanie 12
// --------------------------
// Napisz funkcję `checkFemale(name)`, która sprawdza przekazane do niej imię.
// Funkcja powinna zwracać prawdę lub fałsz w zależności od tego czy przekazane imię kończy się na literę `"a"`.
// Przykładowo:

// ```
// checkFemale("Ania") === true
// checkFemale("Marcin") === false
// ```

// Napisz funkcję `countWomanInTable(arr)`, do której przekażesz tablicę użytkowników, którą masz poniżej.
// Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.
// Wykorzystaj tutaj powyższą funkcję. Do pobrania imienia możesz wykorzystać funkcję `split()`.

// // ```
// const users = [
//   "Ania Nowak",
//   "Piotr Kowalski",
//   "Bartek Kosecki",
//   "Natalia Nowak",
//   "Weronika Piotrowska",
//   "Agata Karolak",
//   "Tomasz Nowak",
//   "Mateusz Kowalski",
//   "Marcin Kotecki",
//   "Beata Lecka",
//   "Katarzyna Małecka",
// ];
// // ```

// function checkFemale(name) {
//   if (name.charAt(name.length - 1) === "a") {
//     return true;
//   } else {
//     return false;
//   }
// }

// checkFemale("Marta");
// console.log(checkFemale("Marta"));
// console.log(checkFemale("Nell"));

// function countWomanInTable(arr) {
//   let name = "";
//   let names = [];
//   for (let el of arr) {
//     name = el.split(" ")[0];
//     console.log(name);
//     if (name.charAt(name.length - 1) === "a") {
//       names.push(name);
//     }
//   }
//   return names.length;
// }
// console.log(countWomanInTable(users));

// ## Zadanie 13
// --------------------------
// Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę miesięcy. Jeżeli przekazana wartość jest spoza zakresu albo nie jest liczbą, funkcja powinna zwrócić false.

// ```
// input : monthName(10)
// wynik : październik

// input : monthName("ala")
// wynik : false
// ```

// months = [
//   "styczeń",
//   "luty",
//   "marzec",
//   "kwiecień",
//   "maj",
//   "czerwiec",
//   "lipiec",
//   "sierpień",
//   "wrzesień",
//   "październik",
//   "listopad",
//   "grudzień",
// ];

// console.log(months[1 - 1]);

// function monthName(nr) {
//   if (nr >= 1 && nr <= 12) {
//     return months[nr - 1];
//   } else {
//     return false;
//   }
// }

// monthName(1);
// console.log(monthName(1));
// console.log(monthName(6));

// ## Zadanie 14
// --------------------------
// Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.
// Przykładowo słowo `kajak` to palindrom, ale już `pies` nim nie jest.

// function checkPalindrom(txt) {
//   let txtArr = txt.split(""); //
//   console.log(txtArr);
//   let txtArrReverse = txtArr.reverse();
//   console.log(txtArrReverse);
//   let txtReverse = txtArrReverse.join("");
//   console.log(txtReverse);
//   if (txt === txtReverse) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkPalindrom("pies"));
// console.log(checkPalindrom("kajak"));

// ## Zadanie 15
// --------------------------
// Napisz funkcję `mix(txt)`, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:
// ```
// input -> Ala ma kota
// output -> AlA Ma kOtA
// ```

// function mix(txt) {
//   let arrTxt = txt.split(" ");
//   console.log(arrTxt);
//   // ['zima', 'pada', 'snieg']
//   for (let i = 0; i < arrTxt.length; i++) {
//     console.log(arrTxt[i]);
//     // zima, pada, snieg
//     for (let j = 0; j < arrTxt[i].length; j++) {
//       if (j % 2 === 0) {
//         arrTxt[i] = arrTxt[i].replace(arrTxt[i][j], arrTxt[i][j].toUpperCase());
//         console.log(arrTxt[i]); // ZiMa  // PaDa   // SnIeg
//       }
//     }
//   }
//   console.log(arrTxt);
//   //['ZiMa', 'PaDa', 'SnIeG']
//   return arrTxt.join(" ");
//   // ZiMa PaDa SnIeG
// }
// console.log(mix("zima pada snieg")); // ZiMa PaDa SnIeG

// Napisz dodatkowo 3 funkcje `smallNames(arr)`, `bigNames(arr)` i `mixNames(arr)`.
// Każda z nich niech przyjmuje tablicę imion.
// Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane małymi literami, druga dużymi, a trzecia zmiksowanymi literami.

// ```
// input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
// output1 -> ["ania", "marcin", "bartek", "piotr"]
// output2 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
// output3 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
// ```

// function smallNames(arr) {
//   let arrNew = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrNew.push(arr[i].toLowerCase());
//     console.log(arrNew);
//   }
//   return arrNew;
// }
// console.log(smallNames(["Ania", "Marcin", "Bartek", "Piotr"])); // ['ania', 'marcin', 'bartek', 'piotr']

// function bigNames(arr) {
//   let arrNew = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrNew.push(arr[i].toUpperCase());
//     console.log(arrNew);
//   }
//   return arrNew;
// }
// console.log(bigNames(["Ania", "Marcin", "Bartek", "Piotr"])); // ['ANIA', 'MARCIN', 'BARTEK', 'PIOTR']

// function mixNames(arr) {
//   let arrNew = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (j % 2 === 0) {
//         arr[i] = arr[i].replace(arr[i][j], arr[i][j].toUpperCase());
//         console.log(arr[i]); // 'AnIa', // 'MaRcIn', // 'BaRtEk', // 'PiOtR'
//       }
//     }
//   }
//   console.log(arr); // ['AnIa', 'MaRcIn', 'BaRtEk', 'PiOtR']
//   return (arrNew = arr);
// }
// console.log(mixNames(["Ania", "Marcin", "Bartek", "Piotr"])); // ['AnIa', 'MaRcIn', 'BaRtEk', 'PiOtR']

// ## Zadanie 16
// --------------------------
// Mamy przykładową tablicę: const tab = [1,3,5,7,3,5,5,1,7,8,4,3,4,2,2,1];
// Stwórz funkcję `arraySummary(arr)`, która zwróci obiekt zawierający dane na temat przekazanej tablicy.
// Obiekt ten powinien mieć klucz `sum`, w którym zapiszesz sumę wszystkich liczb z tablicy.
// Dodatkowo powinien mieć klucze odpowiadające liczbom z tablicy. Pod każdym takim kluczem powinieneś zachować liczbę wystąpień danej liczby.

// Input:
// const tab = [1,1,1,2,2,1,3,3,5,7,5]
// Wynik:
// const ob = {
//     1 : 4,
//     2 : 2
//     3 : 2,
//     5 : 2,
//     7 : 1,
//     sum : 31
// }
// ```

// const tab = [1, 1, 1, 2, 2, 1, 3, 3, 5, 7, 5];

// function arraySummary(arr) {
//   const countObj = {};
//   let sumNumbers = 0;
//   arr.forEach(function (element) {
//     console.log(element);
//     countObj[element] = ++countObj[element] || 1;
//     sumNumbers += element;
//   });
//   countObj.sum = sumNumbers;
//   return countObj;
// }

// arraySummary(tab);
// console.log(arraySummary(tab));

// ## Zadanie 17
// --------------------------
// Napisz funkcję `log(txt)`, która będzie służyć do wypisywania tekstu w konsoli. Tekst powinien być poprzedzony numerem np. `1. To jest przykładowy tekst`. Numer powinien się automatycznie zwiększać przy każdorazowym użyciu tej funkcji. Nie wolno ci tutaj użyć zmiennej globalnej, a zamiast niej odpowiednich domknięć.


const counter = ((count = 1) =>() =>count++)();

function log(txt) {
    console.log(`${counter()}. ${txt}`);
}

log("sprawdzamy");
log("jeszcze raz");
log("i jeszcze raz");
log("kolejny raz");


