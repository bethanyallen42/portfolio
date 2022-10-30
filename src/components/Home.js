import React from "react";
import "../style/Home.css";

import js_logo from "../icons/js_pink.png";
import react_logo from "../icons/react_pink.png";
import node_logo from "../icons/node_pink.png";
import html_logo from "../icons/html_pink.png";
import css_logo from "../icons/css_pink.png";
import express_logo from "../icons/express_pink.png";
import postgres_logo from "../icons/postgresql_pink.png";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="home-content">
          <h1>Bethany Allen</h1>
          <div>
            <img src={js_logo} alt="JavaScript logo" className="tech-logo" />
            <img src={react_logo} alt="React logo" className="tech-logo" />
            <img src={node_logo} alt="Node logo" className="tech-logo" />
            <img
              src={postgres_logo}
              alt="PostgreSQL logo"
              className="tech-logo"
            />
            <img src={html_logo} alt="HTML5 logo" className="tech-logo" />
            <img src={css_logo} alt="CSS3 logo" className="tech-logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
