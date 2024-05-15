import React from 'react';
import { createRoot } from 'react-dom/client';
import Box from "./Box.jsx";

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
    return (
        <Box/>
    );
};

root.render(<App />);
