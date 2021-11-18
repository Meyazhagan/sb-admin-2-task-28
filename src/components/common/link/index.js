import React from "react";
import { useHistory } from "react-router";

function Link({ children, classes, path, ...rest }) {
  const history = useHistory();
  const handelClick = (e) => {
    e.preventDefault();
    if (path === "#") return false;
    history.push(path);
  };
  return (
    <div
      className={classes || ""}
      onClick={handelClick}
      {...rest}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
}

export default Link;
