import React from "react";

function CardFooter({ children, classes }) {
  return <div className={`card-footer ${classes}`}>{children}</div>;
}

export default CardFooter;
