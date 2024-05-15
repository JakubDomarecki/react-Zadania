import React from 'react';
import { createRoot } from 'react-dom/client';
import ToDoList from "./ToDoList.jsx";

const App = () => {
    return (
        <ToDoList/>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
