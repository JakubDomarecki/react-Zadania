import React from 'react';
import { createRoot } from 'react-dom/client';
import Pokemon from "./pokemon.jsx";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Pokemon />);
