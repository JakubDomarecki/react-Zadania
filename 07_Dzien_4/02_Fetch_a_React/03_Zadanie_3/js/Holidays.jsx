import {useEffect, useState} from "react";

const Holidays = () => {
    const [holidays, setHolidays] = useState([]);
    const [country, setCountry] = useState("PL");

    const changeCountry = (e) => setCountry(e.target.value);


    useEffect(() => {
        const url = `https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${country}`;
        fetch(url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Not ok");
            })
            .then(data => setHolidays(data.holidays))
            .catch(err => console.error(err));
    }, [country]);



    return (
        <>
            <select value={country} onChange={changeCountry}>
                <option value="PL">Poland</option>
                <option value="GB">UK</option>
                <option value="US">US</option>
            </select>
            <ul className="list">
                {holidays.map(({name, date, uuid}) => (
                    <li key={uuid}>
                        <h3 className="holiday-name">{name}</h3>
                        <div className="holiday-date">{date}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default Holidays;