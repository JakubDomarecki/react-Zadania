import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import HelloYou from "./HelloYou.jsx";
import CheckAge from "./CheckAge.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="Hello/:name" element={<HelloYou/>}/>
                    <Route path="checkage/:age" element={<CheckAge/>}/>
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
