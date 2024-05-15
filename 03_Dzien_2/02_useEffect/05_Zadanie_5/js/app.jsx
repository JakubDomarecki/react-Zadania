import React from 'react';
import { createRoot } from 'react-dom/client';
import Stopwatch from "./Stopwatch.jsx";

const App = () => {
    return (
      <Stopwatch/>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
