import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import PropsToState from "./PropsToState.jsx";
import ShowInfo from "./ShowInfo.jsx";

const App = () => {
  return (
      <>
          <PropsToState text="Hello World!"/>
      </>
  );
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
