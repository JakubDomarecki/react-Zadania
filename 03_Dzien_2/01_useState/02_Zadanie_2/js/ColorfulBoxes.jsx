import {useState} from "react";
import '../css.css';
const ColorfulBoxes = () => {
    const [boxes, setBoxes] = useState([]);

    const createRandomColor = () =>
        `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const createBox = () => ({ id: Math.random(), bgColor: createRandomColor() });

    const addBox = () => setBoxes((state) => [...state, createBox()]);

    return (
        <div>
            <button type="button" onClick={addBox}>
                +box
            </button>

            <ul>
                {boxes.map((box) => (
                    <li
                        key={box.id}
                        className="box"
                        style={{ background: box.bgColor }}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ColorfulBoxes;