import React, { useState } from 'react';
import {Link} from "react-router-dom";

const WhoIsPresent = () => {
    const [products, setProducts] = useState([
        {
            value: 'play-station',
            label: 'Play Station',
        },
        {
            value: 'macbook-pro-m1',
            label: 'MacBook Pro M1',
        },
        {
            value: 'new-balance',
            label: 'New Balance',
        },
    ]);
    const [presentItems, setPresentItems] = useState([]);

    const handleSelectChange = (e) => {
        const selectValue = e.target.value;
        const selectedProduct = products.find(product => product.label === selectValue);
        setPresentItems([...presentItems, selectedProduct]);
    };

    return (
        <>
            <ul>
                {presentItems.map((item, index) => (
                    <Link to={`/details/${item.value}`}>{item.label}</Link>
                ))}
            </ul>

            <select onChange={handleSelectChange}>
                {products.map((product, index) => <option key={index}>{product.label}</option>)}
            </select>
        </>
    );
};

export default WhoIsPresent;