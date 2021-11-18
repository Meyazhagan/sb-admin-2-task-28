import React from "react";

function CardHeader({ children, classes }) {
  return <div className={`card-header ${classes || ""}`}>{children}</div>;
}

export default CardHeader;
