import React from 'react';
import { createRoot } from 'react-dom/client';
import SecretStuff from "./SecretStuff.jsx";

const App = () => {
    return (
        <>
            <SecretStuff password="123" correctPassword="123" secret="Hello World!"/>
            <SecretStuff password="1234" correctPassword="123" secret="Hello World!"/>
        </>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
