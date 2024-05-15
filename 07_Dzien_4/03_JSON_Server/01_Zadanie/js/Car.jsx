// Car
import React, { useState } from "react";

const Car = ({ car, patchCar, deleteCar }) => {
    const {
        id,
        name,
        brand,
        engine: { type, hp },
    } = car;

    const [errMsg, setErrMsg] = useState("");
    const [isEdited, setIsEdited] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newBrand, setNewBrand] = useState(brand);
    const [newType, setNewType] = useState(type);
    const [newHp, setNewHp] = useState(Number(hp));

    const changeNewName = (e) => setNewName(e.target.value);
    const changeNewBrand = (e) => setNewBrand(e.target.value);
    const changeNewType = (e) => setNewType(e.target.value);
    const changeNewHp = (e) => setNewHp(Number(e.target.value));

    const handlePatchCar = (e) => {
        e.preventDefault();

        // VALIDATION
        if ([newName, newBrand, newType].some((value) => value === "")) {
            setErrMsg("Pola tekstowe nie moga byc puste.");
            return false;
        }
        if (typeof newHp !== "number") {
            setErrMsg("Konie mechaniczne musza byc numerem.");
            return false;
        }

        const newCar = {
            name: newName,
            brand: newBrand,
            engine: {
                type: newType,
                hp: newHp,
            },
        };

        patchCar(id, newCar);
        setIsEdited(false);
        setErrMsg("");
    };
    const handleIsEdited = (e) => setIsEdited((state) => !state);
    const handleDeleteCar = (e) => deleteCar(id);

    return (
        <>
            <li className="list-group-item mb-2">
                {errMsg && (
                    <p className="badge border border-danger text-danger">{errMsg}</p>
                )}
                <mark>{brand}</mark> <strong>{name}</strong>{" "}
                <small>
                    ({type}, {hp}hp)
                </small>
                <button
                    className="btn btn-primary ml-2"
                    type="button"
                    onClick={handleIsEdited}
                >
                    <small>Edytuj</small>
                </button>
                <button
                    className="btn btn-danger ml-2"
                    type="button"
                    onClick={handleDeleteCar}
                >
                    <small>Sprzedaj</small>
                </button>
                {isEdited && (
                    <form className="mb-4" onSubmit={handlePatchCar}>
                        {[
                            ["Nazwa", changeNewName, newName],
                            ["Marka", changeNewBrand, newBrand],
                            ["Typ silnika", changeNewType, newType],
                            ["Konie mechaniczne", changeNewHp, newHp],
                        ].map(([label, fn, data]) => (
                            <div key={label} className="mb-3">
                                <label className="form-label">
                                    <strong>{label}</strong>
                                </label>
                                <input
                                    className="form-control"
                                    type={label === "Konie mechaniczne" ? "number" : "text"}
                                    onChange={fn}
                                    value={data}
                                />
                            </div>
                        ))}

                        <input className="btn btn-success" type="submit" value="Zapisz" />
                    </form>
                )}
            </li>
        </>
    );
};

export default Car;


