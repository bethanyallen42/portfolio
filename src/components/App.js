import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home, Portfolio, Blog } from "./";

const App = () => {
  return (
    <main>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/portfolio">Portfolio</NavLink>

        <NavLink to="/Blog">Blog</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </main>
  );
};

export default App;
