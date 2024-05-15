import React from 'react';
import { createRoot } from 'react-dom/client';
import Modal from "./Modal.jsx";
const App = () => {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera" />
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
