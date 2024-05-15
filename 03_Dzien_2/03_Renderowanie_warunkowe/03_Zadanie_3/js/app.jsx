import React from 'react';
import { createRoot } from 'react-dom/client';
import NumberInfo from "./NumberInfo.jsx";

const App = () => {
    return (
        <>
        <NumberInfo number={1}/>
        <NumberInfo number={2}/>
        <NumberInfo number={5}/>
        <NumberInfo number={7}/>
        <NumberInfo number={10}/>
        <NumberInfo number={16}/>
        </>
    );

};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
