import {useEffect, useState} from "react";

const NumberRandomInfo = () => {
    const [RandomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
           setRandomNumber(Math.ceil(Math.random() * 5));

       },1000);
        return () => clearInterval(intervalId);
    },[]);


    return (
        <p>{RandomNumber >= 3 ? `Wieksza lub rowna 3. Liczba: ${RandomNumber}.` : `Mniejsza od 3. Liczba: ${RandomNumber}.`}</p>
    );

};
export default NumberRandomInfo;