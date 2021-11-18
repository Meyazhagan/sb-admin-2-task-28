import React from "react";

function Col({ children, classes }) {
  return <div className={`col${classes || ""}`}>{children}</div>;
  //   return <div className={`col${classes[0]!=="-" && ` ${classes}`}`}>{children}</div>;
}

export default Col;
