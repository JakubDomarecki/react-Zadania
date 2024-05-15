import {useState} from "react";

const Box = () => {
    const [width, setWidth] = useState("500px");
    const [height, setHeight] = useState("200px");
    const [background, setBackground] = useState("green");

    const ChangeDiv = (NewBgColor, newWidth, newHeight) => {
        setBackground(NewBgColor);
        setWidth(newWidth);
        setHeight(newHeight);
    };



    return (
        <>
            <button onClick={() => ChangeDiv("orange", "200px", "300px",)}>change1</button>
            <button onClick={() => ChangeDiv("blue", "100px", "700px",)}>change2</button>
            <button onClick={() => ChangeDiv("green", "500px", "200px",)}>change3</button>
            <div style={{width: width, height: height, backgroundColor: background}}></div>
        </>
    );
};
export default Box;