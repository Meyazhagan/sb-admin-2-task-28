import React from "react";
import Link from "../common/link";
import Nav from "../common/nav/Nav";
import NavItem from "../common/nav/NavItem";
import NavLink from "../common/nav/NavLink";
import { SearchBar } from "./components";
import { alerts, message } from "../../data/topBarData.json";

function Topbar({ onCollapse }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        onClick={() => onCollapse((prev) => !prev)}
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars" />
      </button>
      {/* Topbar Search */}
      <SearchBar />
      {/* Topbar Navbar */}
      <Nav classes="ml-auto">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}
        <NavItem classes="dropdown no-arrow d-sm-none">
          <NavLink
            classes="dropdown-toggle"
            path="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw" />
          </NavLink>
          {/* Dropdown - Messages */}
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </NavItem>
        {/* Nav Item - Alerts */}
        <NavItem classes="dropdown no-arrow mx-1">
          <NavLink
            classes="dropdown-toggle"
            path="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bell fa-fw" />
            {/* Counter - Alerts */}
            <span className="badge badge-danger badge-counter">3+</span>
          </NavLink>
          {/* Dropdown - Alerts */}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown"
          >
            <h6 className="dropdown-header">Alerts Center</h6>
            {alerts.map((alert, index) => (
              <Link
                classes="dropdown-item d-flex align-items-center"
                path="#"
                key={index}
              >
                <div className="mr-3">
                  <div className={`icon-circle bg-${alert.type}`}>
                    <i className={`fas fa-${alert.icon} text-white`} />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">{alert.time}</div>
                  {alert.message}
                </div>
              </Link>
            ))}

            <Link
              className="dropdown-item text-center small text-gray-500"
              path="#"
            >
              Show All Alerts
            </Link>
          </div>
        </NavItem>
        {/* Nav Item - Messages */}
        <NavItem classes="dropdown no-arrow mx-1">
          <NavLink
            classes="dropdown-toggle"
            path="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-envelope fa-fw" />
            <span className="badge badge-danger badge-counter">
              {message.length}
            </span>
          </NavLink>
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="messagesDropdown"
          >
            <h6 className="dropdown-header">Message Center</h6>
            {message.map((msg, index) => (
              <Link
                className="dropdown-item d-flex align-items-center"
                path="#"
                key={index}
              >
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src={msg.avatar}
                    alt={`user ${index}`}
                  />
                  <div className={`status-indicator bg-${msg.status}`} />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">{msg.message}</div>
                  <div className="small text-gray-500">{msg.info}</div>
                </div>
              </Link>
            ))}
          </div>
        </NavItem>
        <div className="topbar-divider d-none d-sm-block" />
        {/* Nav Item - User Information */}
        <NavItem classes="dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            path="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Douglas McGee
            </span>
            <img
              className="img-profile rounded-circle"
              src="assets/img/undraw_profile.svg"
              alt="..."
            />
          </Link>
          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" path="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
              Profile
            </Link>
            <Link className="dropdown-item" path="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
              Settings
            </Link>
            <Link className="dropdown-item" path="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
              Activity Log
            </Link>
            <div className="dropdown-divider" />
            <Link
              className="dropdown-item"
              path="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
              Logout
            </Link>
          </div>
        </NavItem>
      </Nav>
    </nav>
  );
}

export default Topbar;
