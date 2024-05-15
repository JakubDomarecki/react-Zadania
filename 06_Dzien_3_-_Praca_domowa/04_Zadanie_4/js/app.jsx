import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Notes from "./Notes.jsx";

const App = () => {
  return(
    <Notes/>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
