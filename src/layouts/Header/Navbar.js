import React from 'react'
import "./Header.scss";
import { menuItems } from "./menuData";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="menu">
      {menuItems.map((menu, index) =>(
         <MenuItems items={menu} key={index} />
        // <li className="menu_item" key={index}>
        // <button className="dropdown_btn">{menu.title}</button>
    //   </li>
      ))}
      </ul>
    </nav>
  )
}


export default Navbar;