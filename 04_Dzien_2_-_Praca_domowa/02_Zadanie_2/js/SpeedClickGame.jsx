import {useEffect, useState} from "react";

const SpeedClickGame = ( {time} ) => {
    const [times, setTime] = useState(time);
    const [points, setPoints] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(times - 50);
        },50);
        return () => clearInterval(intervalId);
    }, [times]);

    useEffect(() => {
        if (times <= 0) {
            setButtonDisabled(true);
        }
    }, [times]);

    const handleClick = () => {
        if (!buttonDisabled) {
            setPoints(prevPoints => prevPoints + 1);
            setTime(times - 50);
        }
    };




    return (
        <>
            <button onClick={handleClick} disabled={buttonDisabled}>Click me!</button>
            <div>
                <h1>{times}ms</h1>
                <h2>{points}</h2>
            </div>
        </>
    );


};
export default SpeedClickGame;