import React, { useState } from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-links">
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              {/* <a href="#home">Home</a> */}
              <Link to='/' >Home</Link>
            </li>
            <li>
      <Link to='/About'>About</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="logo">
          <h1>ChatBot Logo</h1>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
