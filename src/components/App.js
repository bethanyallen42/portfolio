import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home, Portfolio, Blog } from "./";
import "../style/App.css";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            Bethany Allen
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/portfolio"
                  className="nav-link active"
                  aria-current="page"
                >
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a href="/blog" className="nav-link active" aria-current="page">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
