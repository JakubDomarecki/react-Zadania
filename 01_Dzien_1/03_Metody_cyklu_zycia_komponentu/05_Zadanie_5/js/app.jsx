import React from 'react';
import { createRoot } from 'react-dom/client';
import StrobeLight from "./StrobeLight.jsx";

const App = () => {
  return (
      <>
        <StrobeLight color="red" frequency={500}/>
        <StrobeLight color="green" frequency={250}/>
        <StrobeLight color="blue" frequency={125}/>
      </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
