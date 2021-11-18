import React from "react";

function PageHeading({ title, children }) {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">{title}</h1>
      {children}
    </div>
  );
}

export default PageHeading;
