const ShowUserFunc = ({ name, surname }) => {
    const handleClick = (e) => {
        console.log(name, surname);
    };

    return (
        <button type="button" onClick={handleClick}>
            Dane użytkownika
        </button>
    );
};

export default ShowUserFunc;