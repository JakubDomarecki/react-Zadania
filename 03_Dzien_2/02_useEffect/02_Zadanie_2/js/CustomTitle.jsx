import React, { useEffect, useState } from "react";

const CustomTitle = () => {
    // DATA
    const [n, setN] = useState(1);

    // LOGIC
    useEffect(() => {
        document.title = n;
    }, [n]);

    const incrN = () => setN((state) => state + 1);

    // UI
    return (
        <p style={{ fontSize: `${n * 1.2}rem` }} onClick={incrN}>
            Kliknięto mnie już: {n} razy
        </p>
    );
};

export default CustomTitle;