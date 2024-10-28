import React, { useContext } from "react";
import Button from "./Button";
import CounterContext from "../context/CounterContext";

const Counter = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1>Count :{count} </h1>

      <Button />
    </div>
  );
};

export default Counter;
