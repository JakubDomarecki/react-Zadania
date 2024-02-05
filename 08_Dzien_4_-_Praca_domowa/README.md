![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `08_Dzien_4_-_Praca_domowa/01_Zadanie`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

---

### Część 1

Stwórz komponent `Users` który będzie pobierał listę użytkowników z JSON Server.

Ma on ich wyświetlać w dowolny dla Ciebie sposób. **Spróbuj lekko ostylować swoją aplikację!**. Należy wyświetlić **wszystkie informacje** o użytkowniku.

### Część 2

Na górze strony ma się wyświetlać komponent `AddUser`. Ma to być formularz przyjmujący takie wartości:

- imię (`name`) - Walidacja: min. 2 znaki, max. 60 znaków, nie liczba [`input`]

- nazwisko (`surname`) - Walidacja: min. 2 znaki, max. 60 znaków, nie liczba [`input`]

- wiek (`age`) - Walidacja: wartość min. 18, musi być liczbą [`input`]

- miasto (`city`) - Walidacja: musi być jakieś wybrane: Do wyboru 4 dowolne miasta [`select`]

- płeć (`gender`) - Walidacja: musi być coś zaznaczone: Male, Female, I don't wanna say [`input type="radio"`]

Po kliknięciu `Zapisz` ma nastąpić walidacja, zgodnie z zasadami wymienionymi wyżej. Jeżeli jakieś pole nie spełnia wymogów, należy taką informację wyświetlić użytkownikowi jako komunikat o błędzie.

Jeżeli wszystko jest ok, należy wysłać dane do `json-server` i sprawić, żeby ten element pokazał się na liście użytkowników (`Users`). Oczywiście **bez odświeżania strony**!
