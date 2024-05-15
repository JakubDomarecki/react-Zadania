import React from 'react';
import { createRoot } from 'react-dom/client';
import Shop from "./Shop.jsx";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Shop />);
