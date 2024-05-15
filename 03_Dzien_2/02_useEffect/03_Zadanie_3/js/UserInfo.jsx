import React, {useState, useEffect} from "react";

const UserInfo  = () => {
    const [user, setUser] = useState({
        name: 'Jakub',
        surname: 'Domarecki',
    });

    useEffect(() => {
        setUser({ name: "Ewa", surname: "Rajska" });
    }, []);

    return (
        <p>{user.name} {user.surname}</p>
    );


};
export default UserInfo;