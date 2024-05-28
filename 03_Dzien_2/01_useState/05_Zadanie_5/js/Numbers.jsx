import React, { useState } from "react";

const INIT_NUMBERS = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40];
const Numbers = () => {
   const [numbersArray, setArray] = useState(INIT_NUMBERS);

   const DoArrayEven = () => {
       setArray(INIT_NUMBERS.filter(even => even % 2 === 0));
   };
    const ShowWholeArray = () => {
        setArray(INIT_NUMBERS);
    };
    const DoArrayNotEvent = () => {
        setArray(INIT_NUMBERS.filter(notEven => notEven % 2 !== 0));
    };

   return (
       <>
           <button onClick={DoArrayEven}>Pokaż tylko parzyste</button>
           <button onClick={ShowWholeArray}>Pokaż wszystkie</button>
           <button onClick={DoArrayNotEvent}>Pokaż nieparzyste"</button>
           <ul>{numbersArray.map((el, index) => <li key={index}>{el}</li>)}</ul>
       </>
   );
};
export default Numbers;