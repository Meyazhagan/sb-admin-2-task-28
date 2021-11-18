import React, { useState } from "react";
import sideBar from "../../data/sidebarNavList.json";
import Link from "../common/link";
import Nav from "../common/nav/Nav";
import NavList from "../common/sidebar/NavList";

const SidebarBrand = ({ children }) => (
  <Link
    classes="sidebar-brand d-flex align-items-center justify-content-center"
    path="/"
  >
    <div className="sidebar-brand-icon rotate-n-15">
      <i className="fas fa-laugh-wink"></i>
    </div>
    {children}
  </Link>
);

const Divider = () => <hr className="sidebar-divider" />;

function Sidebar({ collapsed }) {
  const [toggle, setToggle] = useState(false);
  return (
    <Nav
      classes={`bg-gradient-primary sidebar sidebar-dark accordion ${
        toggle && "toggled"
      }  ${collapsed && "collapse"}`}
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <SidebarBrand>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </SidebarBrand>
      {/* Divider */}
      <Divider />

      {sideBar.map((s, index) => (
        <div key={index}>
          {s.sidebarHeading && (
            <div className="sidebar-heading">{s.sidebarHeading}</div>
          )}
          <NavList list={s.navList} />
          {s.divider && <Divider />}
        </div>
      ))}
      <div className="text-center d-none d-md-inline">
        <button
          onClick={() => setToggle((t) => !t)}
          className="rounded-circle border-0"
          id="sidebarToggle"
        />
      </div>
    </Nav>
  );
}

export default Sidebar;
