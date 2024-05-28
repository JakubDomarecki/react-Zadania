import React, { useState } from 'react';

const SelectOrType = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState('');
    const [customItem, setCustomItem] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);

    const handleCustomInputChange = (e) => {
        setCustomItem(e.target.value);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedItem(e.target.value);
        if (value === 'Inne') {
            setShowCustomInput(true);
        } else {
            setShowCustomInput(false);
        }
    };

    const handleCustomItemSubmit = (e) => {
        e.preventDefault();
        setSelectedItem(customItem);
        setShowCustomInput(false);
    };

    return (
        <form>
            <select value={selectedItem} onChange={handleChange}>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
                <option value="Inne">Inne</option>
            </select>
            {showCustomInput && (
                <div>
                    <input type="text" value={customItem} onChange={handleCustomInputChange} />
                    <button type="button" onClick={handleCustomItemSubmit}>
                        Zatwierdź
                    </button>
                </div>
            )}
        </form>
    );
};
export default SelectOrType;



//MIKOLAJ ROZWIazanie
// import React, { useState } from "react";
//
// const SelectOrType = ({ items }) => {
//     // STATE
//     const [brand, setBrand] = useState("");
//
//     const [other, setOther] = useState("Inne"); // pojawia sie w <option>
//     const [newOther, setNewOther] = useState(""); // pojawia sie w <input>
//
//     const [isNewOtherMenuOpen, setIsNewOtherMenuOpen] = useState(false);
//
//     // LOGIC
//     const saveBrand = (e) => {
//         const newBrand = e.target.value;
//         setBrand(newBrand);
//         setIsNewOtherMenuOpen(newBrand === "other");
//     };
//
//     const saveNewOther = (e) => setNewOther(e.target.value);
//
//     const updateOtherOption = () => {
//         setOther(newOther);
//         setIsNewOtherMenuOpen(false);
//     };
//
//     // UI
//     return (
//         <form>
//             <select value={brand} onChange={saveBrand}>
//                 {items.map((item) => (
//                     <option value={item.toLowerCase()}>{item}</option>
//                 ))}
//                 <option value="other">{other}</option>
//             </select>
//
//             {isNewOtherMenuOpen && (
//                 <>
//                     <label htmlFor="otherItem">
//                         Inne
//                         <input
//                             type="text"
//                             name="otherItem"
//                             value={newOther}
//                             onChange={saveNewOther}
//                         />
//                     </label>
//                     <input type="button" value="Zmien" onClick={updateOtherOption} />
//                 </>
//             )}
//         </form>
//     );
// };
//
// export default SelectOrType;