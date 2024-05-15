import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import TrafficLights from "./TrafficLights.jsx";

const App = () => {
  return (
      <TrafficLights/>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
