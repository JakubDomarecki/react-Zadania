import react, {useState} from "react";

const INIT_COUNTER =  10;
const Counter = () => {
    const [Counter, setCounter] = useState(INIT_COUNTER);

    const incr = () => setCounter((state) => state + 1);
    const decr = () => setCounter((state) => state - 1);
    const reset = () => setCounter(INIT_COUNTER);




    return (
        <>
            <h2>{Counter}</h2>
            <button type='button' onClick={incr}>+</button>
            <button type='button' onClick={decr}>-</button>
            <button type='button' onClick={reset}>reset</button>
        </>
    );
};

export default Counter;