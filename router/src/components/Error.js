import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Error
      <Link to="/about">Return to about page</Link>
    </div>
  );
};

export default Error;
