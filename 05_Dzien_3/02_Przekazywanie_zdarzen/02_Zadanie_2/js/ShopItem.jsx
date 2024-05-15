const ShopItem = ({title, onBuy}) => {

    const handleBuy = () => {
      if (typeof onBuy === "function") {
          onBuy(title);
      }
    };


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleBuy}>Kup</button>
        </div>
    );
};
export default ShopItem;