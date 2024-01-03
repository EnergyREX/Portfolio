import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact"
import Work from "./pages/Work"
import Portfolio from "./pages/Portfolio"

import "./index.css"

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    )
}

export default App;