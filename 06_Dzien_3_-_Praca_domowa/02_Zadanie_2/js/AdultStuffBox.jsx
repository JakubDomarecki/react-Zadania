import React from 'react';
const AdultStuffBox = ({age}) => {
    return (
        <>
            {age >= 18 && <p>Lorem ipsum, treść dla pełnoletnich.</p>}
        </>
    );
};
export default  AdultStuffBox;