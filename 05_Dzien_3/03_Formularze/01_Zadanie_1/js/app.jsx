import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from "./Hello.jsx";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Hello />);
