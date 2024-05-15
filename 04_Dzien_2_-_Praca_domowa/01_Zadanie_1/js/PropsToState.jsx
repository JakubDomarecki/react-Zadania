import {useEffect, useState} from "react";
import ShowInfo from "./ShowInfo.jsx";

const PropsToState = ({text}) => {
    const [txt, setTxt] = useState(text);

    useEffect(() => {
       const intervalId = setInterval(() => {
           setTxt(txt + '!');
       }, 1000);
       return () => clearInterval(intervalId);
    });


    return (
      <ShowInfo info={txt}/>
    );

};
export default PropsToState;