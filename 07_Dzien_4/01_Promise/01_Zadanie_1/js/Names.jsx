import React, { useEffect, useState } from "react";
import getNames from "./data/names";

const Names = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        getNames() // Function returning Promise
            .then((data) => setNames(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <ul className="list-group">
                {names.map((name) => (
                    <li className="list-group-item">{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Names;