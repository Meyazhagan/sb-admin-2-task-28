import React from "react";
import Link from "../link";

function NavLink({ children, classes, path, ...rest }) {
  return (
    <Link classes="nav-link" path={path} {...rest}>
      {children}
    </Link>
  );
}

export default NavLink;
