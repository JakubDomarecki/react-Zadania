import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import DynamicLego from "./DynamicLego.jsx";

const App = () => {
    return (
      <DynamicLego/>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
