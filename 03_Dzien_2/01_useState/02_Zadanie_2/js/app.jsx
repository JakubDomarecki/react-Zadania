import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorfulBoxes from "./ColorfulBoxes.jsx";

const App = () => {
    return (
        <ColorfulBoxes/>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
