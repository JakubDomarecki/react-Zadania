import React from 'react';
import { createRoot } from 'react-dom/client';
import EventsTest from "./EventsTest.jsx";

const container = document.getElementById('app');
const root = createRoot(container);
const App = () => {
    return (
      <EventsTest />
    );
};
root.render(<App />);
