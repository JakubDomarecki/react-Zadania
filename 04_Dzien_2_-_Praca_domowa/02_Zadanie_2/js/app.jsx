import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import SpeedClickGame from "./SpeedClickGame.jsx";

const App = () => {
  return (
    <SpeedClickGame time={2000}/>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
