import React from "react";

const Dropdown = (props) => {
  const { submenus, dropdown } = props;

  return (
    <ul className={`dropdown_content ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="dropdown_item">
          <a href="/#">
            <span>{submenu.title}</span>
            <span>{submenu.mnemonic}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
