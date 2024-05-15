import {useState} from "react";

const PESELInput = () => {
    const [pesel, setPesel] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const isValidPesel = /^\d{11}$/.test(inputValue);
        setPesel(inputValue);
        setIsValid(isValidPesel);
    };

    const predefault = (e) => {
      e.preventDefault();
    };

    return (
      <form onClick={predefault}>
          <input type="text" value={pesel} onChange={handleInputChange}/>
          <div>
              {isValid ? <input type="submit" value="Prześlij"/> : <p>Niepoprawny numer PESEL</p>}
          </div>
      </form>
    );
};
export default PESELInput;