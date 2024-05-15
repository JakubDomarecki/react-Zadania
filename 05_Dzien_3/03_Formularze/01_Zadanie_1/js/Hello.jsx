import {useState} from "react";

const Hello = () => {
    const [name, setName] = useState('ty');

    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };


    return (
        <form>
            <input type="text" value={name} onChange={handleChange}/>
            <h1>Hello {name}</h1>
        </form>
    );
};
export default Hello;