import React from "react";
import { useParams } from "react-router-dom";

const CheckAge = () => {
    const { age } = useParams();

    return <h1>{age >= 18 ? "Pełnoletni" : "Niepełnoletni"}</h1>;
};

export default CheckAge;