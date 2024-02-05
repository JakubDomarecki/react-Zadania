![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Przekazywanie_parametrow/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `Bulb` z elementem `div` z kolorem tła ustawionym na biały, szerokością i wysokością 100px. W elemencie `div` umieść przycisk `button` z napisem "On".

Kliknięcie przycisku zmienia stan żarówki: jeżeli tło `div` było białe, to zmienia je na żółte, a napis na przycisku na "Off". W przeciwnym wypadku zmienia tło na białe, a napis na "On".


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Przekazywanie_parametrow/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `Box` z elementem `div` z kolorem tła ustawionym na zielony, szerokością `500px` i wysokością `200px`.

Dodatkowo stwórz 3 przyciski które będą zmieniać wymiary i kolor `diva`:

1. `200x300px`, kolor pomarańczowy
2. `100x700px`, kolor niebieski
3. `500x200px`, kolor zielony

Do wszystkich przycisków ma być użyta **ta sama metoda**. Należy przesłać do niej odpowiednie parametry tak by zostały zapisane w stanie komponentu.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Przekazywanie_parametrow/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, wysokość i szerokość `100px` oraz `position` ustawione na `absolute`.

Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` na dwie losowe wartości z przedziału, który został zdeklarowany jako parametry funkcji. Np.:

```js
() => handleHover(0, 1000); // przedział 0 - 1000
() => handleHover(300, 600); // przedział 300 - 600
```
