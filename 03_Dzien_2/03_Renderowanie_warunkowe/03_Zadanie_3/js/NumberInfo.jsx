import {useEffect, useState} from "react";
const NumberInfo = ({number}) => {
    const isPowerOfTwo = (n) => (n <= 0 ? false : Math.log2(n) % 1 === 0);
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
return (
    <ul>
        <li>Liczba: {number}</li>
        <li>{number % 2 === 0 ? "Parzysta" : "Nieparzysta"}</li>
        {isPrime(number) && <li>Liczba jest liczba pierwsza</li>}
        {isPowerOfTwo(number) && <li>Liczba jest potega liczby 2</li>}
    </ul>
);

};
export default NumberInfo;