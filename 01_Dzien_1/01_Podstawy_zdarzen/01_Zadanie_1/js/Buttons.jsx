const Buttons = (props) => {
    const handleClick1 = (e) => {
        console.log("Pierwszy przycisk kliknięty");
    };

    const handleClick2 = (e) => {
        const a = prompt("Liczba A, pls");
        const b = prompt("Liczba B, pls");
        const result = a * b;

        console.log(result);
    };

    const handleClick3 = (e) => {
        console.log(window.innerWidth, window.innerHeight);
    };

    return (
        <>
            <button type="button" onClick={handleClick1}>
                Klik!
            </button>
            <button type="button" onClick={handleClick2}>
                Klik!
            </button>
            <button type="button" onClick={handleClick3}>
                Klik!
            </button>
        </>
    );
};

export default Buttons;