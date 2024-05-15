import React from 'react';
import { createRoot } from 'react-dom/client';
import SelectOrType from "./SelectOrType.jsx";

const App = () => {
    const items = ["BMW", "Jaguar", "Porsche"];
  return (
      <SelectOrType items={items}/>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
