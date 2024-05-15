import React, { useEffect, useState } from "react";
import ClockTime from "./ClockTime.jsx";
import ClockDate from "./ClockDate.jsx";

const Clock = () => {
const [CurrentDate, setCurrentDate] = useState(new Date());

useEffect(() => {
    const IntervalId = setInterval(() => {
        setCurrentDate(new Date());
    },1000);
    return () => {
        clearInterval(IntervalId);
    };
    },[]);

return(
    <>
        <ClockTime Date={CurrentDate}/>
        <ClockDate Date={CurrentDate}/>
    </>
);

};
export default Clock;