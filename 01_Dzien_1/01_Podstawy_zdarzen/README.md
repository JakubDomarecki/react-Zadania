![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Podstawy_zdarzen/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent funkcyjny o nazwie `Buttons` z 3 przyciskami z napisem "Klik!".

- Po kliknięciu pierwszego przycisku wyświetl w konsoli "Pierwszy przycisk kliknięty".

- Po kliknięciu drugiego przycisku wywołaj dwukrotnie funkcję `prompt()`, służącą do pobrania od użytkownika liczby A i B. W konsoli wyświetlcie wynik potęgowania tych dwóch liczb.

- Po kliknięciu trzeciego przycisku wyświetl w konsoli szerokość i wysokość ekranu (z obiektu `window`).


## Zadanie 2 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Podstawy_zdarzen/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `ShowUserFunc` i `ShowUserClass`. Mają one przyjmować w `props` imię (`name`) i nazwisko (`surname`). Komponenty mają renderować przycisk "Dane użytkownika". Po jego kliknięciu **w konsoli** wyświetl zawartość propsów `name` i `surname`.

Komponent `ShowUserFunc` ma być funkcyjny a `ShowUserClass` klasowy.

Stwórz też komponent `App` który będzie renderował oba komponenty i przesyłał do nich odpowiednie propsy.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Podstawy_zdarzen/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `HoverEvent` renderujący przycisk. Po **najechaniu** na przycisk wypisz w konsoli: "Najechano na przycisk!".

Zadanie spróbuj rozwiązać za pomocą komponentu klasowego i funkcyjnego.


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Podstawy_zdarzen/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent **funkcyjny** `EventsTest` z elementem `div` o wymiarach 100 na 100 pikseli i czerwonym tle.

Zareaguj na zdarzenia: kliknięcia, najechania, opuszczenia kursorem tego elementu - wypisując odpowiednią informację w konsoli.
