import React, { useState } from "react";
import ButtonToClick from "./ButtonToClick";
const ButtonCounter = () => {
    const [counter, setCounter] = useState(0);

    const incr = () => setCounter((state) => state + 1);

    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick incr={incr} />
            <ButtonToClick incr={incr} />
        </div>
    );
};

export default ButtonCounter;