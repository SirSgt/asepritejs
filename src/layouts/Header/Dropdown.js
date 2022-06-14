import React from "react";

const Dropdown = (props) => {
  const { submenus, dropdown } = props;

  return (
    <ul className={`dropdown_content ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="dropdown_list">
          <a href="/#">{submenu.title}</a>
          <a href="/#">{submenu.mnemonic}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
