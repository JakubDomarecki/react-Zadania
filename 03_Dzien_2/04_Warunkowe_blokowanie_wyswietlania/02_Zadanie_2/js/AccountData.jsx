import React, { useEffect, useState } from "react";
import FakeAPI from "./data/fakeAPI";

const AccountData = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        FakeAPI.then((data) => {
            setData(data);
        });
    }, []);

    return (
        data && (
            <table>
                <thead>
                <tr>
                    <th>DAY</th>
                    <th>BALANCE</th>
                    <th>CHANGE</th>
                </tr>
                </thead>
                <tbody>
                {data.map(({ day, balance, change }) => (
                    <tr>
                        <td>{day}</td>
                        <td>{balance}</td>
                        <td>{change}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    );
};

export default AccountData;







