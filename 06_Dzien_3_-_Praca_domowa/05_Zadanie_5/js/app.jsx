import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import WhoIsPresent from "./WhoIsPresent.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Details from "./details.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WhoIsPresent/>}/>
          <Route path="/details/:value" element={<Details/>}/>
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
