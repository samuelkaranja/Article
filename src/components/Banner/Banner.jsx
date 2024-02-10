import React from "react";
import "./style.css";

const Banner = ({ title, text }) => {
  return (
    <div className="banner">
      <div className="info">
        <h1>{title}</h1>
        <a href="/#">{text}</a>
      </div>
    </div>
  );
};

export default Banner;
