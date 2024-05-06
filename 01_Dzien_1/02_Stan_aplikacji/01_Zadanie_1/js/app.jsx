import React from 'react';
import { createRoot } from 'react-dom/client';
import TextTyper from "./TextTyper.jsx";

const App = () => {
  return (
      <TextTyper text='HELLO, WORLD!'/>
);
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
