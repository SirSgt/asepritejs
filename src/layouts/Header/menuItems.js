import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = (props) => {
  const { items } = props;
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="menu_item">
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            className={`dropdown_btn ${dropdown ? "clicked" : ""}`}
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <button type="button" className="dropdown_btn">
          {items.title}
        </button>
      )}
    </li>
  );
};

export default MenuItems;
