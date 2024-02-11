import React from "react";
import "./style.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>
            <a href="/#">Contact us</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Privacy Policy</a>
          </li>
          <li>
            <a href="/#">Terms</a>
          </li>
        </ul>
      </div>
      <div className="social_links">
        <ul>
          <li>
            <a href="/#">
              <FaTwitter size={20} color="#1DA1F2" />
            </a>
          </li>
          <li>
            <a href="/#">
              <FaInstagram size={20} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="/#">
              <FaFacebook size={20} color="#1877F2" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Wise Words</p>
      </div>
    </div>
  );
};

export default Footer;
