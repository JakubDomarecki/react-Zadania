import React, { useEffect, useState } from "react";

const Box = () => {
    const [bgColor, setBgColor] = useState("cornflowerblue");

    useEffect(() => {
        setTimeout(() => {
            setBgColor("tomato");
        }, 1000);
    }, []); // tylko onMount


    return (
        <div style={{ width: "100px", height: "100px", background: bgColor }} />
    );
};

export default Box;