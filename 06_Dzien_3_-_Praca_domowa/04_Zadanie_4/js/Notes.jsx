import {useState} from "react";

const Notes = () => {
    const [texareaValue, setTexareaValue] = useState("");
    const handleTextareaChange = (e) => {
        const textareaText = e.target.value;
        setTexareaValue(textareaText);
    };

    const clearTextarea = () => {
        setTexareaValue("");
    };

    const stopForm = (e) => {
        e.preventDefault();
    };

    return (
      <form onClick={stopForm}>
          <textarea value={texareaValue} onChange={handleTextareaChange}></textarea>
          <button onClick={clearTextarea}>Wyczyść</button>
          <span>{texareaValue}</span>
      </form>
    );
};
export default Notes;

