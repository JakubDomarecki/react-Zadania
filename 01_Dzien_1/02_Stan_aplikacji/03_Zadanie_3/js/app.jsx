import React from 'react';
import { createRoot } from 'react-dom/client';
import RandomNumbers from "./RandomNumbers.jsx";

const App = () => {
  return (
    <RandomNumbers/>
  );
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
