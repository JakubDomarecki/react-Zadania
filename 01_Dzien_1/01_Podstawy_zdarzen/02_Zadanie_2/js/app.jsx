import React from 'react';
import { createRoot } from 'react-dom/client';
import ShowUserClass from "./ShowUserClass.jsx";
import ShowUserFunc from "./ShowUserFunc.jsx";
const App = () => {
  return (
      <>
          <ShowUserClass name="jakub" surname="domarecki"/>
          <ShowUserFunc name="jakub" surname="domarecki"/>
      </>
  );
};



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
