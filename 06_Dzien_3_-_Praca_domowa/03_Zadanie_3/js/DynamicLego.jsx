import React, { useState } from "react";

const DynamicLego = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const renderLis = () => {
        const lis = [];

        for (let i = 0; i < inputValue; i++) {
            const liStyle = {
                backgroundColor: 'red',
                height: '50px',
                width: `${(i + 1) * 50}px`
            };
            lis.push(<li key={i} style={liStyle}></li>);
        }

        return lis;
    };

    return (
      <form>
          <input type="number" value={inputValue} onChange={handleInputChange}/>
          <ul>
              {renderLis()}
          </ul>
      </form>
    );
};
export default DynamicLego;