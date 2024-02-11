import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Wise Words</Link>
      </div>
      <div className="nav_links">
        <ul>
          <li>Featured</li>
          <li>Explore</li>
          <li>Community</li>
          <li>Write</li>
        </ul>
        <div className="nav_buttons">
          <a href="/#">Get started</a>
          <a href="/#">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
