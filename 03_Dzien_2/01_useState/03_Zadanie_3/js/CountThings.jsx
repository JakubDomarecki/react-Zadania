import React, { useState } from "react";

const MONEY_TO_ADD = 10000;
const INIT_MONEY = 10000;
const INIT_AGE = 33;

const CountThings = () => {
    const [account, setAccount] = useState(INIT_MONEY);
    const [age, setAge] = useState(INIT_AGE);

    const addMoney = () => setAccount((state) => state + MONEY_TO_ADD);
    const incrAge = () => setAge((state) => state + 1);

    return (
        <div>
            <p>💰 so much money: {account}</p>
            <p>Age: {age}</p>

            <button type="button" onClick={addMoney}>
                Get rich!
            </button>
            <button type="button" onClick={incrAge}>
                Get older :(
            </button>
        </div>
    );
};
export default CountThings;