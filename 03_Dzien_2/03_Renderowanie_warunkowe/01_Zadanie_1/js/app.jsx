import React from 'react';
import { createRoot } from 'react-dom/client';
import MyButton from "./MyButton.jsx";

    const App = () => {
        return (
            <MyButton/>
        );
    };

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
