import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import AdultStuff from "./AdultStuff.jsx";

const App = () => {
    return (
        <AdultStuff/>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
