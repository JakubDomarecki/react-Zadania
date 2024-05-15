import {useEffect, useState} from "react";

const CrazyDiv = () => {
    const [topPostition, setTopPostition] = useState(0);
    const [leftPostition,setleftPostition] = useState(0);

    const createRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const changePosition = (min, max) => {
        setTopPostition(createRandomNumber(min, max));
        setleftPostition(createRandomNumber(min, max));
    };


    return (
      <div style={{width:"100px", height:"100px", backgroundColor:"red", position:"absolute", top:topPostition, left:leftPostition}} onMouseOver={() => changePosition(0, 500)}></div>
    );

};
export default CrazyDiv;