import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Button = () => {
  const { increment, decrement, count } = useContext(CounterContext);
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count < 1 ? true : false}>
        Decrement
      </button>
    </>
  );
};

export default Button;
