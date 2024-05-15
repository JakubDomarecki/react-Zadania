import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import PESELInput from "./PESELInput.jsx";

const App = () => {
  return (
      <PESELInput/>
  );
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
