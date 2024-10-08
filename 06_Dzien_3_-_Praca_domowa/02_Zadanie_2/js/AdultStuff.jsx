import AdultStuffBox from "./AdultStuffBox.jsx";
import {useState} from "react";

const AdultStuff = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return(
      <form onClick={handleSubmit}>
          <input type="number" value={inputValue} onChange={handleInputChange}/>
          <AdultStuffBox age={inputValue}/>
      </form>
    );

};
export default  AdultStuff;