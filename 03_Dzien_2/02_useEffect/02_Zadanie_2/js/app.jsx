import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomTitle from "./CustomTitle.jsx";

const App = () => {
  return (
    <CustomTitle/>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
