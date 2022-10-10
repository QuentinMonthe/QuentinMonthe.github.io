import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Indique un chemin de navigation sur le site */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" englobe tous les chemin de navigation non references sur le site */}
        <Route path="*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
