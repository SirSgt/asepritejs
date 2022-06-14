import React from "react";
import Dropdown from "./Dropdown";

const MenuItems = (props) => {
  const { items } = props;

  return (
    <li className="menu_item">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" className="dropdown_btn">
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} />
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
