![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Renderowanie_warunkowe/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `MyButton`.

Ma on zawierać jeden przycisk, który wyświetla na początku "NIE". Po jego kliknięciu napis ma się zmienić na "TAK", po następnym kliknięciu z powrotem na "NIE" itd. **Aby wyświetlić odpowiedni tekst, użyj operatora trójargumentowego bezpośrednio wewnątrz JSX.**


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Renderowanie_warunkowe/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `NumberRandomInfo`, który co sekundę losuje liczbę z zakresu 0 - 5. Do losowania liczby skorzystaj ze wzoru:

```js
Math.ceil(Math.random() * 5);
```

W metodzie `render` zaimplementuj warunek, który sprawdzi wylosowaną liczbę. Jeżeli wylosowana liczba jest większa lub równa 3, to należy wyrenderować tę liczbę oraz napis: "Większa lub równa 3". W przeciwnym przypadku należy wyrenderować tę liczbę oraz napis: "Mniejsza od 3".

Twój komponent powinien automatycznie generować losową liczbę co sekundę i aktualizować wyświetlaną liczbę oraz odpowiedni napis na podstawie warunku.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Renderowanie_warunkowe/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.

Następnie, bezpośrednio wewnątrz JSX, korzystając z operatora trójargumentowego i operatora logicznego `&& ` wyrenderuj w elemencie `ul` następujące elementy listy:

- Liczba
- Parzysta / nieparzysta
- Liczba pierwsza (nie pojawia się jeżeli to nieprawda)
- Potęga liczby 2 (nie pojawia się jeżeli to nieprawda)

Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:

- 1
- 2
- 5
- 7
- 10
- 16
