import React from 'react';
import { createRoot } from 'react-dom/client';
import CrazyDiv from "./CrazyDiv.jsx";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<CrazyDiv />);
