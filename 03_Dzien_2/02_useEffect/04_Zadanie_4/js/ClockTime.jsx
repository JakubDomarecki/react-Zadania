import React from "react";

const ClockTime = ({ Date }) => {
    return <h1>{Date.toLocaleTimeString()}</h1>;
};

export default ClockTime;