import ShopItem from "./ShopItem.jsx";
import {useState} from "react";
const Shop = () => {
    const [purchasedItems, setPurchasedItems] = useState([]);

    const handleBuyItem = (title) => {
        setPurchasedItems([...purchasedItems, title]);
    };

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={handleBuyItem}/>
            <ShopItem title="Dell X5500" onBuy={handleBuyItem}/>
            <ShopItem title="Asus NT6000" onBuy={handleBuyItem}/>
            <ul>
                {purchasedItems.map((item, index)=> <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};
export default Shop;