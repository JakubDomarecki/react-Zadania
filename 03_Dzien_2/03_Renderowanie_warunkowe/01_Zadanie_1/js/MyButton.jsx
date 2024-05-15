import React, { useState } from "react";

const MyButton = () => {
    const [isYes, setIsYes] = useState(false);

    const toggleIsYes = () => setIsYes((state) => !state);

    return (
        <button type="button" onClick={toggleIsYes}>
            {isYes ? "TAK" : "NIE"}
        </button>
    );
};

export default MyButton;