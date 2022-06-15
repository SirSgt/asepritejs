import React from "react";
import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

const MenuItems = (props) => {
  const { items } = props;
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu_items" ref={ref}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            className={`menu_item ${dropdown ? "clicked" : ""}`}
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <button type="button" className="menu_item">
          {items.title}
        </button>
      )}
    </li>
  );
};

export default MenuItems;
