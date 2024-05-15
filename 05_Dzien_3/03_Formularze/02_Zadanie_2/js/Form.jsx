import React, { useEffect, useState } from "react";
import fakeAPI from "./data/fakeAPI";

const Form = () => {
    const [username, setUsername] = useState("coderslab");
    const [password, setPassword] = useState("qwerty");
    const [user, setUser] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // VALIDATION
        if (username.length <= 2) {
            setErrMsg("Nazwa uzytkownika musi miec przynajmniej 3 znaki.");
            return;
        }
        if (password.length <= 4) {
            setErrMsg("Haslo musi miec przynajmniej 5 znakow.");
            return;
        }

        fakeAPI
            .login({ username, password })
            .then((user) => setUser(user))
            .catch((err) => setErrMsg(err));
    };

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <>
            {!user && (
                <div>
                    <p style={{ color: "red" }}>{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input
                                type="text"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </label>
                        <input type="submit" value={"Zaloguj!"} />
                    </form>
                </div>
            )}

            {user && (
                <h1>
                    Witaj, {user.name} {user.surname}.{" "}
                    <small>(ostatni login: {user.lastLogin.toString()})</small>
                </h1>
            )}
        </>
    );
};

export default Form;