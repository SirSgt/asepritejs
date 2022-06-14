import React from "react";
// import "./Header.css";
import "../css/header.css";

const Header = () => {
  return (
    <nav className="nav">
      <ul className="links">
        <li>
          <a href="/#" className="link">
            File
          </a>
        </li>
        <li>
          <a href="/#" className="link">
            Edit
          </a>
        </li>
        <li>
          <a href="/#" className="link">
            Sprite
          </a>
        </li>
        <li>
          <a href="/#" className="link">
            Layer
          </a>
        </li>
        <li>
          <a href="/#" className="link">
            Frame
          </a>
        </li>
        <li>
          <a href="/#" className="link">
            Select
          </a>
        </li>
        <li>
          <a href="/#" className="link">
            View
          </a>
        </li>
        <li>
          <a href="/#" className="link">
            Help
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
