import React from 'react';
import { createRoot } from 'react-dom/client';
import Clock from "./Clock.jsx";

const App = () => {
    return (
        <>
            <Clock/>
        </>
    );
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
