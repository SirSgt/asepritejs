import React from "react";

const Dropdown = (props) => {
  const { submenus, dropdown } = props;

  return (
    <ul className={`dropdown_content ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index}>
          <a href="/#">{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
