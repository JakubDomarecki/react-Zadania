import React from 'react';
import { createRoot } from 'react-dom/client';
import UserInfo from "./UserInfo.jsx";

const App  = () => {
    return (
      <UserInfo/>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
