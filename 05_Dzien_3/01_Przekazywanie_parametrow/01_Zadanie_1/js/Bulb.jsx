import React, { useState } from "react";

const Bulb = () => {
    const [isOn, setIsOn] = useState(true);

    const toggleOn = () => setIsOn((state) => !state);

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                background: isOn ? "white" : "yellow",
            }}
        >
            <button type="button" onClick={toggleOn}>
                {isOn ? "On" : "Off"}
            </button>
        </div>
    );
};

export default Bulb;