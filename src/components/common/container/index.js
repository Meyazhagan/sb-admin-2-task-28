import React from "react";

function Container({ children, classes }) {
  return <div className={`container-fluid ${classes}`}>{children}</div>;
}

export default Container;
