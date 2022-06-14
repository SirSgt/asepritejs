import React from "react";

const Dropdown = (props) => {
  const { submenus } = props;

  return (
    <ul className="dropdown_content ">
      {submenus.map((submenu, index) => (
        <li key={index}>
          <a href="/#">{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
