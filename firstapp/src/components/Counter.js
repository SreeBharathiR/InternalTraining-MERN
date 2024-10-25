import React from "react";

const Counter = ({ children, data }) => {
  return (
    <div>
      <h1>Count :{data} </h1>

      {children}
      {/* <Button text="Increment" func={add} />
      <Button text="Decrement" func={sub} disable={data < 1 ? true : false} /> */}
    </div>
  );
};

export default Counter;
