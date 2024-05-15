import React from "react";
const ButtonToClick = ({ incr }) => {
    const handleClick = () => {
        if (typeof incr === "function") {
            incr();
        }
    };

    return (
        <button type="button" onClick={handleClick}>
            +1
        </button>
    );
};

export default ButtonToClick;