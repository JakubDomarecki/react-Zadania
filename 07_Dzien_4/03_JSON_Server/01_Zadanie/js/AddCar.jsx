import {useState} from "react";

const AddCar = ({addCar}) => {
    const [name, setName] = useState("Golf Mk6 GTI");
    const [brand, setBrand] = useState("Volkswagen");
    const [type, setType] = useState("petrol");
    const [hp, setHp] = useState(207);

    const changeName = (e) => setName(e.target.value);
    const changeBrand = (e) => setBrand(e.target.value);
    const changeType = (e) => setType(e.target.value);
    const changeHp = (e) => setHp(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        addCar(name, brand, type, hp);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={changeName} value={name}></input>

                <label>brand</label>
                <input type="text" onChange={changeBrand} value={brand}></input>

                <label>type</label>
                <input type="text" onChange={changeType} value={type}></input>

                <label>hp</label>
                <input type="number" onChange={changeHp} value={hp}></input>


                <input type="submit" value="Dodaj"/>
            </form>
        </>
    );
};
export default AddCar;