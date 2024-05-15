// CarsManager.jsx

import React, { useEffect, useState } from "react";
import AddCar from "./AddCar";
import Car from "./Car.jsx";

const CarsManager = () => {
    const URL = "http://localhost:3001";

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`${URL}/cars`)
            .then((resp) => resp.json())
            .then((data) => setCars(data))
            .catch(console.log);
    }, []);

    const deleteCar = (id) =>
        setCars((state) => state.filter((car) => car.id !== id));
    // fetch(`${URL}/cars/${id}`, { method: "DELETE" })
    // 	.then((resp) => resp.json())
    // 	.then(console.log)
    // 	.catch(console.log);

    const addCar = ( name, brand, type, hp) => {
        const newCar = {
            id: cars.length + 1,
            name,
            brand,
            engine: { type, hp },
        };
        setCars(state=> [...state, newCar]);
    };

    const patchCar = (id, newCar) =>
        fetch(`${URL}/cars/${id}`, {
            method: "PATCH",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(newCar),
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("404");
                }
                return resp.json();
            })
            .then((data) => {
                setCars((state) =>
                    state.map((car) => (car.id === id ? { ...car, ...newCar } : car)),
                );
            })
            .catch(console.log);

    return (
        cars.length > 0 && (
            <div>
                <AddCar addCar={addCar}/>

                <ul>
                    {cars.map((car) => (
                        <Car
                            key={car.id}
                            car={car}
                            patchCar={patchCar}
                            deleteCar={deleteCar}
                        />
                    ))}
                </ul>
            </div>
        )
    );
};

export default CarsManager;