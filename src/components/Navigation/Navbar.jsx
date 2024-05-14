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
    <nav className="navbar">
      <a href="/" className="nav-logo">
        Penned
      </a>
      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <a href="/" className="nav-item">
          Featured
        </a>
        <Link to="/explore" className="nav-item">
          Explore
        </Link>
        <a href="/" className="nav-item">
          Community
        </a>
        <Link to="/edit" className="nav-item">
          Write
        </Link>
        <Link to="/profile" className="nav-item">
          Profile
        </Link>
        <a href="/#" className="nav-item signup">
          Get started
        </a>
        <a href="/#" className="nav-item login">
          Sign in
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
