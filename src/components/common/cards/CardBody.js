import React from "react";

function CardBody({ children, classes }) {
  return <div className={`card-body ${classes}`}>{children}</div>;
}

export default CardBody;
