import React from "react";
import "./Header.scss";
// import "../css/header.css";

const Header = () => {
  return (
    <nav className="nav">
      <ul className="links">
        <li className="dropdown_menu">
          <button className="dropdown_btn">File</button>
          <div class="dropdown_content">
            <a href="/#">Link 1</a>
            <a href="/#">Link 2</a>
            <a href="/#">Link 3</a>
          </div>
        </li>
        <li>
          <button className="dropdown_btn">Edit</button>
        </li>
        <li>
          <button className="dropdown_btn">Sprite</button>
        </li>
        <li>
          <button className="dropdown_btn">Layer</button>
        </li>
        <li>
          <button className="dropdown_btn">Frame</button>
        </li>
        <li>
          <button className="dropdown_btn">Select</button>
        </li>
        <li>
          <button className="dropdown_btn">View</button>
        </li>
        <li>
          <button className="dropdown_btn">Help</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
