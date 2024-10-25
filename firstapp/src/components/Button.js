import React from "react";

const Button = ({ text, func, disable }) => {
  return (
    <button onClick={func} disabled={disable}>
      {text}
    </button>
  );
};

export default Button;
