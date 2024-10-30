import React from "react";
import { useParams } from "react-router-dom";

const Param = () => {
  const param = useParams();
  return <div>Param {param.meetId}</div>;
};

export default Param;
