import React from "react";
import Container from "../../components/common/container";
import Link from "../../components/common/link";

function PagesNotFound() {
  return (
    <Container>
      <div className="text-center">
        <div className="error mx-auto" data-text={404}>
          404
        </div>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">
          It looks like you found a glitch in the matrix...
        </p>
        <Link path="/">← Back to Dashboard</Link>
      </div>
    </Container>
  );
}

export default PagesNotFound;
