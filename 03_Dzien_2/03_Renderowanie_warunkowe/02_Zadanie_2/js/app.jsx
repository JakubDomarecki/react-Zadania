import React from 'react';
import { createRoot } from 'react-dom/client';
import NumberRandomInfo from "./NumberRandomInfo.jsx";

const App = () => {
    return (
      <NumberRandomInfo/>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
