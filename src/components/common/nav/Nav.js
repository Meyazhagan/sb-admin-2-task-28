import React from "react";

function Nav({ children, classes, ...rest }) {
  return (
    <ul className={`navbar-nav ${classes || ""}`} {...rest}>
      {children}
    </ul>
  );
}

export default Nav;
