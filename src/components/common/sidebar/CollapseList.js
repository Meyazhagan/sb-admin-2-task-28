import React from "react";
import { useLocation } from "react-router";

import Link from "../link";
import NavLink from "../nav/NavLink";

function CollapseList({ item }) {
  const location = useLocation();
  const collapseProp = {
    classes: "collapsed",
    path: "#",
    "data-toggle": "collapse",
    "data-target": `#${item.navItem}`,
    "aria-expanded": "false",
    "aria-controls": item.navItem,
  };
  return (
    <>
      <NavLink path={item.path} {...collapseProp}>
        <i className={`fas fa-fw fa-${item.icon}`} />
        <span>{item.navItem}</span>
      </NavLink>
      <div
        id={item.navItem}
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          {item.collapseList?.map((c, index) => (
            <div key={index}>
              {c.collapseHeader ? (
                <h6 className="collapse-header">{c.collapseHeader}</h6>
              ) : (
                <Link
                  classes={`collapse-item ${
                    c.path === location.pathname && "active"
                  }`}
                  path={c.path}
                >
                  {c.collapseItem}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CollapseList;
