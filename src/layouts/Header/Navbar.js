import React from 'react'
import "./Header.scss";
import { menuItems } from "./menuItems";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="menu">
      {menuItems.map((menu, index) =>(
        <li className="menu_item" key={index}>
        <button className="dropdown_btn">{menu.title}</button>
      </li>
      ))}
      </ul>
    </nav>
  )
}

export default Navbar