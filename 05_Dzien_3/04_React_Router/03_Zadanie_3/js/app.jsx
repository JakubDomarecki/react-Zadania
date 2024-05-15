import React from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Pricing from "./Pricing";
import MainLayout from "./Layout/MainLayout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);