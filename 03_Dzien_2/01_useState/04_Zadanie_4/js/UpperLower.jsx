import React, { useState } from 'react';

const INITAL_TXT = "hello world";

const  UpperLower = () => {
    const [txt, setTxt] = useState(INITAL_TXT);

    const MakeUppercase = () => setTxt((state) => state.toUpperCase());
    const MakeLowercase = () => setTxt((state) => state.toLowerCase());


    return (
        <>
            <h2>{txt}</h2>
            <button onClick={MakeUppercase}>Uppercase</button>
            <button onClick={MakeLowercase}>Lowercase</button>
        </>
    );
};
export default UpperLower;