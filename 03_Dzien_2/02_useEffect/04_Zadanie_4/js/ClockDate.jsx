import React from "react";

const ClockDate = ({ Date }) => {
    return <h1>{Date.toLocaleDateString()}</h1>;
};

export default ClockDate;