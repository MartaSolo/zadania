// ## Zadanie 1
// --------------------------
// W pliku app.js masz tablice użytkowników. Jest to zła forma danych. Czemu?

// Stwórz funkcję `fixData()`, która przyjmie tablicę ze złymi danymi, a następnie zwróci poprawioną tablicę obiektów,
// gdzie każdy z nich będzie miał klucze: `id`, `name`, `surname`, `email`, `age`, `cash` pod które podstawisz kolejne dane z tablicy.
// Spróbuj wykorzystać tutaj destrukturyzację.

// ## Zadanie 2
// Wykorzystaj powyższą funkcję do utworzenia nowej tablicy z obiektami, a następnie:
// - wylicz ile pieniędzy mają wszyscy użytkownicy razem.
// - wylicz średni wiek wszystkich użytkowników
// - stwórz nową tablicę tylko z mailami. Wypisz ją w konsoli

// ## Materiały:
// https://kursjs.pl/kurs/obiekty/obiekty.php
// https://kursjs.pl/kurs/obiekty/destructuring.php

const users = [
  //id, name, surname, email, age, value
  [1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28],
  [2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37],
  [3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06],
  [4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64],
  [5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54],
  [6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08],
  [7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21],
  [8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72],
  [9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68],
  [10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44],
  [11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52],
  [12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.1],
  [13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07],
  [14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97],
  [15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64],
];
