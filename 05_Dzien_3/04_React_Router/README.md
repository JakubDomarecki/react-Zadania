![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - Do wykonania z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/04_React_Router/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz aplikację React, w której znajduje się następujący routing:

- `/` - ścieżka renderuje komponent `Home`, w którym jest `h1` z napisem "Witaj na stronie";
- `/blog` - ścieżka renderuje komponent `Blog`, w którym jest `h1` z napisem "Blog";
- `/pricing` - ścieżka renderuje komponent `Pricing`, w którym jest `h1` z napisem "Cennik".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i element `ul` z linkami do każdej z podstron oraz treść renderowaną przez dzieci. Wykorzystaj komponent `Outlet`.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/04_React_Router/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz aplikację React, w której znajduje się następujący routing:

- `/` - ścieżka główna, z powitaniem;
- `/hello/:name` - ścieżka renderuje komponent `HelloYou`, w którym jest `h1` z napisem "Witaj, {name}", gdzie `{name}` to imię wpisane w ścieżkę;
- `/checkage/:age` - ścieżka renderuje komponent `CheckAge`, w którym jest `h1` z napisem "Pełnoletni", jeżeli w `age` podano wiek min. 18, w przeciwnym wypadku renderuje napis "Niepełnoletni".

Na każdej podstronie wyświetl menu, do 3 przykładowych ścieżek (`/`, `/hello/Jan`, `/checkage/50`).


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/04_React_Router/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Przerób zadanie 2 tak, aby każdy zaznaczony link miał zieloną ramkę.

Stosuj `NavLink`, zamiast `Link`, żeby ominąć możliwe kłopoty z kolorowaniem linków, które nie są dokładnie takie, jakie powinny być. Pamiętaj o parametrze `end`.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki i ich wygląd.
