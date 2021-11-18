import React from "react";

function Card({ children, classes }) {
  return <div className={`card ${classes || ""}`}>{children}</div>;
}

export default Card;
