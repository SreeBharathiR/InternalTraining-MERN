import React from "react";
import { useParams } from "react-router-dom";

const Param = () => {
  const param = useParams();
  const { productId } = useParams();
  return (
    <div>
      Param {param.meetId}
      New Param {productId}
    </div>
  );
};

export default Param;
