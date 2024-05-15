import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import AnotherColor from "./AnotherColor.jsx";

const App = () => {
  return (
      <AnotherColor/>
  );
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
