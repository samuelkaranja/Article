import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Penned</Link>
      </div>
      <div className={`nav_links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Featured</li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>Community</li>
          <li>
            <Link to="/edit">Write</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <div className="nav_buttons">
          <a href="/#">Get started</a>
          <a href="/#">Sign in</a>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
