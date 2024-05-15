import React from 'react';
import { createRoot } from 'react-dom/client';
import LifeCyclesTester from "./LifeCyclesTester.jsx";

const App = () => {
  return (
      <LifeCyclesTester/>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
