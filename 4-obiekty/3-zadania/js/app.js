// ## Zadanie 1
// Stwórz konstruktor/klasę **User**.
// Każdy obiekt budowany na jego bazie powinien mieć właściwości:
// - **nick** - string
// - **name** - string
// - **surname** - string
// - **email** - string
// - **role** - string - typ użytkownika - "editor", "reader", "admin"
// - **loginDates** - tablica - początkowo pusta - z datami kolejnych logowań
// - **active** - boolean - domyślnie ustawione na `true` - czy dany użytkownik jest aktywny

// Właściwości `nick`, `name`, `surname`, `email`, `role` powinny być podawane podczas tworzenia pojedynczego obiektu.

// Dodaj także metody:
// - **logIn()**, która wstawi do tablicy `loginDates` nową datę logowania. Aktualną datę możesz pobrać za pomocą kodu `new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())`
// - **showLoginDates()**, która w pętli pokaże wszystkie daty logowań
// - **showDetails()**, która robiąc pętlę po kluczach wypisze w konsoli wszystkie informacje o danym użytkowniku
// - **toggleActive(active)**, która przełączy właściwość `active` na odwrotną wartość.

// Stwórz tablicę `users` i dodaj do niej 3 obiekty utworzone na bazie powyższej klasy. Poeksperymentuj z ich metodami.

// function User(nick, name, surname, email, role) {
//   this.nick = nick;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.role = role;
//   this.loginDates = [];
//   this.active = true;
//   this.logIn = function () {
//     this.loginDates.push(
//       new Intl.DateTimeFormat("pl-PL", {
//         dateStyle: "full",
//         timeStyle: "long",
//       }).format(new Date())
//     );
//   };
//   this.showLoginDates = function () {
//     this.loginDates.forEach((el) => {
//       console.log(el);
//     });
//   };
//   this.showDetails = function () {
//     for (let [key, value] of Object.entries(this)) {
//       if (typeof this[key] !== "function") {
//         console.log(`${key} : ${value}`);
//       }
//     }
//   };
//   this.toggleActive = function (active) {
//     this.active = active;
//   };
// }

// const user1 = new User("star", "John", "Black", "jbalck@gmail.com", "admin");
// // console.log(user1);
// // User {nick: 'star', name: 'John', surname: 'Black', email: 'jbalck@gmail.com', role: 'admin', …}
// user1.logIn();
// user1.logIn();
// user1.showLoginDates();
// user1.showDetails();
// user1.toggleActive(false);
// console.log(user1.active);

// const user2 = new User("cat", "Elle", "Blue", "eblue@gmail.com", "editor");
// // console.log(user2);
// // User {nick: 'cat', name: 'Elle', surname: 'Blue', email: 'eblue@gmail.com', role: 'user', …}
// user2.logIn();
// user2.showLoginDates();
// user2.showDetails();
// user2.toggleActive(false);
// console.log(user2.active);

// const user3 = new User("bird", "Steve", "White", "swhite@gmail.com", "reader");
// // console.log(user3);
// // User {nick: 'bird', name: 'Steve', surname: 'White', email: 'swhite@gmail.com', role: 'user', …}
// user3.logIn();
// user3.showLoginDates();
// user3.showDetails();
// user3.toggleActive(false);
// console.log(user3.active);

// const users = [user1, user2, user3];
// console.log(users);
// // [User, User, User]
// // 0: User {nick: 'star', name: 'John', surname: 'Black', email: 'jbalck@gmail.com', role: 'admin', …}
// // 1: User {nick: 'cat', name: 'Elle', surname: 'Blue', email: 'eblue@gmail.com', role: 'editor', …}
// // 2: User {nick: 'bird', name: 'Steve', surname: 'White', email: 'swhite@gmail.com', role: 'reader', …}

// --------------------------
// ## Zadanie 2
// Mamy przykładową tablicę:
// 1)
// Stwórz konstruktor/klasę `Fighter`. Powinna mieć ona właściwości:
// `name` - imię
// `live` - życie
// `power` - moc uderzenia
// oraz metody:
// `attack(who)` - metoda będzie służyć do ataku innego zawodnika. W metodzie dany obiekt będzie atakował obiekt `who`.
// Po celnym ataku obiekt `who` powinien stracić tyle punktów życia, ile atakujący ma siły. To czy atak się uda możemy wyliczyć  za pomocą wzoru `Math.random() < 0.5`. Dodatkowo metoda ta powinna wstawiać do tablicy `log` informacje kto kogo zaatakował i ile walczącym postaciom pozostało życia.

// const names = [
//   "Baraka",
//   "Jax",
//   "Johnny Cage",
//   "Kitana",
//   "Kung Lao",
//   "Liu Kang",
//   "Mileena",
//   "Raiden",
//   "Reptile",
//   "Scorpion",
//   "Shang Tsung",
//   "Sub-Zero",
// ];

// 2)
// Stwórz dwie tablice: `log` oraz `fighters`.
// Do tej pierwszej będziesz zapisywał informacje o akcjach.
// Do tej drugiej wstaw wojowników, których stworzysz na bazie klasy `Fighter`. Każdy wojownik powinien mieć **unikalną** nazwę pobraną z tablicy `names`, życie na poziomie `20`, oraz siłę `3`. Możesz tutaj poeksperymentować z parametrami.

// 3)
// Napisz funkcję `getFighter()`, która będzie wybierać z tablicy nowego wojownika i go zwracać.

// 4)
// Stwórz dwie dodatkowe zmienne np. `leftFighter` i `rightFighter` początkowo ustawione na `null`.

// 5)
// Mamy już w zasadzie wszystko co potrzebne. Czas rozpocząć turniej. Rozegramy go w zapętlonej postaci.
// Możesz do tego wykorzystać poniższy fragment kodu:

// ```
// function loop() {
//     //coś tam dłubię i wyliczam

//     if (koniec) {
//         return false;
//     }

//     setTimeout(() => loop(), 100);
// }

// loop();
// ```

// Wewnątrz pętli twoim zadaniem będzie:
// - Jeżeli to konieczne pod zmienne `leftFighter` i `rightFighter` pobierz nowych wojowników
// - walka to losowa wymiana ciosów wykorzystująca metodę `attack` każdego z walczących wojowników. Dla dodania losowości ponownie możemy tutaj użyć równania `Math.random() < 0.5`
// - jeżeli życie walczącej postaci dojdzie do zera, ustaw ją na `null`, a jej przeciwnikowi przywróć życie do początkowej wartości (`20`).
// - wyświetl log. Wykorzystaj tutaj `console.log()` i `console.clear()`
// - sprawdź czy po wymianie ciosów któryś z walczących wojowników jest równy nullowi oraz czy w tablicy pozostały jeszcze jakieś postacie. Jeżeli tablica jest pusta, oznacza to, że na polu walki pozostał zwycięzca. Dodaj odpowiednią informację do loga i zakończ turniej zwracając false.

// --------------------------
// ## Zadanie 3
// Rozbuduj obiekty typu String, dodając do ich prototypu metodę **String.sortText(char)**.
// Po użyciu powinna ona sortować słowa w danym tekście, a następnie zwracać podobny tekst, tylko posortowany:
// "Marcin-Ania-Piotrek-Beata".sortText('-');
// ---> "Ania-Beata-Marcin-Piotrek"
// Wykorzystaj odpowiednie metody dzielące tekst na tablicę, sortujące tablicę i łączące ją w tekst.

String.prototype.sortText = function (char) {
  return this.split(char)
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join(char);
};

const str1 = "Marcin-Ania-Piotrek-Beata";
console.log(str1);
// Marcin-Ania-Piotrek-Beata
console.log(str1.sortText("-"));
// Ania-Beata-Marcin-Piotrek

const str2 = new String("Marta-Alicja-Paweł-Benjamin");
console.log(str2);
// {'Marta-Alicja-Paweł-Benjamin'}
console.log(str2.sortText("-"));
// Alicja-Benjamin-Marta-Paweł

// ## Zadanie 4
// --------------------------
// Rozbuduj obiekty typu String dodając im metodę **reverse()**, która po odpaleniu dla tekstu zwróci jego odbicie:

// ```
// "Ala ma kota".mirror() === "atok am alA"
// ```

// ## Zadanie 5
// --------------------------
// Rozbuduj obiekty typu Array o 2 nowe metody:

// **sum()**
// która użyta dla danej tablicy numerów zwraca jej sumę.

// ```
// [1,2,3].sum() === 6
// ```

// **sortNr()**
// która poprawnie sortuje tablicę liczb

// ```
// [1,1.2,11,22,2.1].sortNr() === [1,1.2,2.1,11,22]
