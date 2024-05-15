import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    const CustomNavLink = (to, title) => {
        return (
            <NavLink
                to={to}
                style={({ isActive }) =>
                    isActive
                        ? { color: "black", fontSize: "22px" }
                        : { color: "gray", fontSize: "22px" }
                }
            >
                {title}
            </NavLink>
        );
    };

    return (
        <div>
            <header>
                <h1>Aplikacja React z React Router</h1>

                <nav>
                    <ul>
                        <li>{CustomNavLink("/", "Home")}</li>
                        <li>{CustomNavLink("/hello/Jan", "Jan")}</li>
                        <li>{CustomNavLink("/checkage/50", "Age 50")}</li>
                    </ul>
                </nav>
            </header>

            <Outlet />

            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    );
};

export default MainLayout;