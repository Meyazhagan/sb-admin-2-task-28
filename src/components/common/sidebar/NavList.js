import React from "react";
import { useLocation } from "react-router";
import NavItem from "../nav/NavItem";
import NavLink from "../nav/NavLink";
import CollapseList from "./CollapseList";

function NavList({ list }) {
  const location = useLocation();
  return list.map((l, index) => (
    <NavItem
      key={index}
      classes={l.active?.includes(location.pathname) && "active"}
    >
      {l.collapseList ? (
        <CollapseList item={l} />
      ) : (
        <NavLink path={l.path}>
          <i className={`fas fa-fw fa-${l.icon}`} />
          <span>{l.navItem}</span>
        </NavLink>
      )}
    </NavItem>
  ));
}

export default NavList;
