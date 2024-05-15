import React from "react";
import { useParams } from "react-router-dom";

const HelloYou = () => {
    const { name } = useParams();

    return <h1>Witaj, {name}</h1>;
};

export default HelloYou;