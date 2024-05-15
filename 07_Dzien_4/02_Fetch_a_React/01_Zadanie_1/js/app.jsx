import React from 'react';
import { createRoot } from 'react-dom/client';
import BookInfo from "./BookInfo.jsx";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<BookInfo isbn="0747532699" />);
