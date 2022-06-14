import React from "react";
import "./Header.scss";
import { menuItems } from "./menuData";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        {menuItems.map((menu, index) => (
          <MenuItems items={menu} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
