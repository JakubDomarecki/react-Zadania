import React from 'react';
import { createRoot } from 'react-dom/client';
import Names from "./Names.jsx";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Names />);
