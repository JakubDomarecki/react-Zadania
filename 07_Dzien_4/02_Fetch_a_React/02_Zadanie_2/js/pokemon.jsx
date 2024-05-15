import React, { useEffect, useState } from "react";

const Pokemon = () => {
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        debugger;
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((resp) => {
                if (resp.ok) {
                    debugger;
                    return resp.json();
                }

                throw new Error("Not ok");
            })
            .then((data) => setPokemons(data.results))
            .catch((err) => console.log(err));
    }, []);

    console.log(pokemons);
    debugger;

    return (
        pokemons && (
            <ul className="list">
                {pokemons.map(({ name, url }) => (
                    <li>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        )
    );
};

export default Pokemon;