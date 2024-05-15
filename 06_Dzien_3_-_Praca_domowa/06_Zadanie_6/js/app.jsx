import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Register from "./Register.jsx";

const App = () => {
  return (
    <Register/>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
