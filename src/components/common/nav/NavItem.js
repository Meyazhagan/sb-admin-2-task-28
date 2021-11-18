import React from "react";

function NavItem({ children, classes, ...rest }) {
  return (
    <li className={`nav-item ${classes || ""}`} {...rest}>
      {children}
    </li>
  );
}

export default NavItem;
