import {useEffect, useState} from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [Laps, setLaps] = useState([]);
    const [IsRunning, setIsRunning] = useState(true);



    useEffect(() => {
        let IntervalId;

        if(IsRunning){
            IntervalId = setInterval(() => {
                setTime((prevState => prevState + 1));
            }, 1000);
        } else {
            clearInterval(IntervalId);
        }
        return () => clearInterval(IntervalId);
    },[IsRunning]);

    const AddLaps = () => {
        setLaps(prevLaps => [...prevLaps, time]);
    };

    const handleStart = () => {
        setIsRunning(true);
    };
    const handleStop = () => {
        setIsRunning(false);
    };

    const restartCouting = () => {
        setTime(0);
        setLaps([]);
        setIsRunning(false);
    };


    return (
        <>
            <h1>Time: {time}s</h1>
            <button onClick={AddLaps}>Lap</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={restartCouting}>Restart</button>
            <button onClick={handleStart}>Start</button>
            <ul>{Laps.map((lap, index) => <li key={index}>{lap}</li>)}</ul>
        </>
    );


};
export default Stopwatch;